#!/usr/bin/env python
# -*- test-case-name: tests.test_calendar_migrationextra -*-
#
# MigrationExtra script for calendar server from Lion Server and earlier only.
#
# Copyright (c) 2005-2013 Apple Inc.  All Rights Reserved.
#
# IMPORTANT NOTE:  This file is licensed only for use on Apple-labeled
# computers and is subject to the terms and conditions of the Apple
# Software License Agreement accompanying the package this file is a
# part of.  You may not port this file to another platform without
# Apple's written consent.

from __future__ import print_function
from __future__ import with_statement

import datetime
import grp
import optparse
import os
import pwd
import shutil
import subprocess
import sys
from twisted.python.filepath import FilePath
from plistlib import readPlist, readPlistFromString, writePlist

SERVER_APP_ROOT = "/Applications/Server.app/Contents/ServerRoot"
LOG = "/var/log/caldavd/migration.log"
CALDAVD_CONFIG_DIR = "private/etc/caldavd"
CARDDAVD_CONFIG_DIR = "private/etc/carddavd"
CALDAVD_PLIST = "caldavd.plist"
CARDDAVD_PLIST = "carddavd.plist"
NEW_SERVER_DIR = "Calendar and Contacts"
NEW_SERVER_ROOT = "/Library/Server/" + NEW_SERVER_DIR
NEW_CONFIG_DIR = "Library/Server/" + NEW_SERVER_DIR + "/Config"
LEGACY_INDICATOR_FILE = "legacy_migration"
LOG_DIR = "var/log/caldavd"
DITTO = "/usr/bin/ditto"

# For looking up previous run state
CALDAV_LAUNCHD_KEY = "org.calendarserver.calendarserver"
CARDDAV_LAUNCHD_KEY = "org.addressbookserver.addressbookserver"
LAUNCHD_OVERRIDES = "var/db/launchd.db/com.apple.launchd/overrides.plist"
LAUNCHD_PREFS_DIR = "System/Library/LaunchDaemons"

# Processed by mergePlist
specialKeys = """
Authentication
BindHTTPPorts
BindSSLPorts
DataRoot
DirectoryService
DocumentRoot
EnableSSL
HTTPPort
RedirectHTTPToHTTPS
SSLAuthorityChain
SSLCertificate
SSLPort
SSLPrivateKey
""".split()

# Ignored by mergePlist
ignoredKeys = """
EnableFindSharedReport
EnableNotifications
MaxAddressBookMultigetHrefs
MaxAddressBookQueryResults
PythonDirector
Verbose
""".split()


def main():

    optionParser = optparse.OptionParser()

    optionParser.add_option('--purge', choices=('0', '1'),
        metavar='[0|1]',
        help='remove old files after migration (IGNORED)')

    optionParser.add_option('--sourceRoot', type='string',
        metavar='DIR',
        help='path to the root of the system to migrate')

    optionParser.add_option('--sourceType', type='string',
        metavar='[System|TimeMachine]',
        help='migration source type (IGNORED)')

    optionParser.add_option('--sourceVersion', type='string',
        metavar='10.X.X',
        help='version number of previous system')

    optionParser.add_option('--targetRoot', type='string',
        metavar='DIR',
        help='path to the root of the new system',
        default='/')

    optionParser.add_option('--language',
        help='language identifier (IGNORED)',
        default="en")

    (options, args) = optionParser.parse_args()
    log("Options: %s" % (options,))

    if not (options.sourceVersion < "10.8"):
        log("ERROR: This script only handles migrations from 10.7 and earlier")
        sys.exit(1)

    if options.sourceRoot and options.sourceVersion:

        if os.path.exists(options.sourceRoot):

            enableCalDAV, enableCardDAV = examineRunState(options)

            # Pull values out of previous plists
            (
                oldServerRootValue,
                oldCalDocumentRootValue,
                oldCalDataRootValue,
                oldABDocumentRootValue,
                uid,
                gid
            ) = examinePreviousSystem(
                options.sourceRoot,
                options.targetRoot
            )

            # Copy data as needed
            (
                newServerRoot,
                newServerRootValue,
                newDataRootValue
            ) = relocateData(
                options.sourceRoot,
                options.targetRoot,
                options.sourceVersion,
                oldServerRootValue,
                oldCalDocumentRootValue,
                oldCalDataRootValue,
                oldABDocumentRootValue,
                uid,
                gid
            )

            # Combine old and new plists
            migrateConfiguration(
                options,
                newServerRootValue,
                newDataRootValue,
                enableCalDAV,
                enableCardDAV
            )

            # Create log directory
            try:
                logDir = os.path.join(options.targetRoot, LOG_DIR)
                os.mkdir(logDir, 0755)
            except OSError:
                # Already exists
                pass
            # Set ownership
            os.chown(logDir, uid, gid)

            # Remove obsolete webapp plists
            obsoletes = [
                "Library/Server/Web/Config/apache2/webapps/org.calendarserver.plist",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.contacts.plist",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.contacts.plist.default",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.contactsssl.plist",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.contactsssl.plist.default",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.webcal.plist",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.webcalssl.plist",
                "Library/Server/Web/Config/apache2/webapps/com.apple.webapp.webcal.webssl.plist",

            ]
            for plistPath in obsoletes:
                plistPath = os.path.join(options.targetRoot, plistPath)
                if os.path.exists(plistPath):
                    log("Obsolete plist exists: %s" % (plistPath,))
                    try:
                        os.remove(plistPath)
                        log("Removed %s" % (plistPath,))
                    except Exception, e:
                        log("Failed to remove %s: %s" % (plistPath, e))



            # Note that the common extra will notice the EnableCalDAV and
            # EnableCardDAV settings from this plist and will trigger a
            # service start as necessary

    else:
        log("ERROR: --sourceRoot and --sourceVersion must be specified")
        sys.exit(1)


def examineRunState(options):
    """
    Try to determine whether the CalDAV and CardDAV services were running in
    previous system.

    @return: a tuple of booleans: whether CalDAV was enabled, and whether
    CardDAV was enabled
    """

    enableCalDAV = None
    enableCardDAV = None

    try:
        disabled = isServiceDisabled(options.sourceRoot, CALDAV_LAUNCHD_KEY)
        enableCalDAV = not disabled
        log("Calendar service '%s' was previously %s" %
            (CALDAV_LAUNCHD_KEY, "disabled" if disabled else "enabled"))
    except ServiceStateError, e:
        log("Couldn't determine previous state of calendar service '%s': %s" %
            (CALDAV_LAUNCHD_KEY, e))

    try:
        disabled = isServiceDisabled(options.sourceRoot, CARDDAV_LAUNCHD_KEY)
        enableCardDAV = not disabled
        log("Addressbook service '%s' was previously %s" %
            (CARDDAV_LAUNCHD_KEY, "disabled" if disabled else "enabled"))
    except ServiceStateError, e:
        log("Couldn't determine previous state of addressbook service '%s': %s" %
            (CARDDAV_LAUNCHD_KEY, e))

    if enableCalDAV:
        # Check previous plist in case previous system was Lion, since there
        # is now only one launchd key for both services
        oldCalDAVPlistPath = os.path.join(options.sourceRoot,
            CALDAVD_CONFIG_DIR, CALDAVD_PLIST)
        if os.path.exists(oldCalDAVPlistPath):
            log("Examining previous caldavd.plist for EnableCalDAV and EnableCardDAV: %s" % (oldCalDAVPlistPath,))
            oldCalDAVDPlist = readPlist(oldCalDAVPlistPath)
            if "EnableCalDAV" in oldCalDAVDPlist:
                enableCalDAV = oldCalDAVDPlist["EnableCalDAV"]
                log("Based on caldavd.plist, setting EnableCalDAV to %s" % (enableCalDAV,))
            if "EnableCardDAV" in oldCalDAVDPlist:
                enableCardDAV = oldCalDAVDPlist["EnableCardDAV"]
                log("Based on caldavd.plist, setting EnableCardDAV to %s" % (enableCardDAV,))

    # A value of None means we weren't able to determine, so default to off
    if enableCalDAV is None:
        enableCalDAV = False
    if enableCardDAV is None:
        enableCardDAV = False

    return (enableCalDAV, enableCardDAV)



def isServiceDisabled(source, service, launchdOverrides=LAUNCHD_OVERRIDES,
    launchdPrefsDir=LAUNCHD_PREFS_DIR):
    """
    Returns whether or not a service is disabled

    @param source: System root to examine
    @param service: launchd key representing service
    @return: True if service is disabled, False if enabled
    """

    overridesPath = os.path.join(source, launchdOverrides)
    if os.path.isfile(overridesPath):
        try:
            overrides = readPlist(overridesPath)
        except Exception, e:
            raise ServiceStateError("Could not parse %s : %s" %
                (overridesPath, str(e)))

        try:
            return overrides[service]['Disabled']
        except KeyError:
            # Key is not in the overrides.plist, continue on
            pass

    prefsPath = os.path.join(source, launchdPrefsDir, "%s.plist" % service)
    if os.path.isfile(prefsPath):
        try:
            prefs = readPlist(prefsPath)
        except Exception, e:
            raise ServiceStateError("Could not parse %s : %s" %
                (prefsPath, str(e)))
        try:
            return prefs['Disabled']
        except KeyError:
            return False

    raise ServiceStateError("Neither %s nor %s exist" %
        (overridesPath, prefsPath))


class ServiceStateError(Exception):
    """
    Could not determine service state
    """



def migrateConfiguration(options, newServerRootValue, newDataRootValue, enableCalDAV, enableCardDAV):
    """
    Copy files/directories/symlinks from previous system's /etc/caldavd
    and /etc/carddavd

    Skips anything ending in ".default".
    Regular files overwrite copies in new system.
    Directories and symlinks only copied over if they don't overwrite anything.
    """

    newConfigDir = os.path.join(options.targetRoot, NEW_CONFIG_DIR)
    newConfigFile = os.path.join(newConfigDir, CALDAVD_PLIST)

    # Create config directory if it doesn't exist
    if not os.path.exists(newConfigDir):
        os.mkdir(newConfigDir)

    defaultConfig = os.path.join(SERVER_APP_ROOT, CALDAVD_CONFIG_DIR, CALDAVD_PLIST)
    if os.path.exists(defaultConfig) and not os.path.exists(newConfigFile):
        log("Copying default config file %s to %s" % (defaultConfig, newConfigFile))
        shutil.copy2(defaultConfig, newConfigFile)

    for configDir in (NEW_CONFIG_DIR, CALDAVD_CONFIG_DIR, CARDDAVD_CONFIG_DIR):

        oldConfigDir = os.path.join(options.sourceRoot, configDir)
        if not os.path.exists(oldConfigDir):
            log("Old configuration directory does not exist: %s" % (oldConfigDir,))
            continue

        log("Copying configuration files from %s to %s" % (oldConfigDir, newConfigDir))

        for name in os.listdir(oldConfigDir):

            if not (name.endswith(".default") or name in (CALDAVD_PLIST, CARDDAVD_PLIST)):

                oldPath = os.path.join(oldConfigDir, name)
                newPath = os.path.join(newConfigDir, name)

                if os.path.islink(oldPath) and not os.path.exists(newPath):
                    # Recreate the symlink if it won't overwrite an existing file
                    link = os.readlink(oldPath)
                    log("Symlinking %s to %s" % (newPath, link))
                    os.symlink(link, newPath)

                elif os.path.isfile(oldPath):
                    # Copy the file over, overwriting copy in newConfigDir
                    log("Copying file %s to %s" % (oldPath, newConfigDir))
                    shutil.copy2(oldPath, newConfigDir)

                elif os.path.isdir(oldPath) and not os.path.exists(newPath):
                    # Copy the dir over, but only if new one doesn't exist
                    log("Copying directory %s to %s" % (oldPath, newPath))
                    shutil.copytree(oldPath, newPath, symlinks=True)


    # Migrate certain settings from the old plists to new:

    oldCalDAVPlistPath = os.path.join(options.sourceRoot, CALDAVD_CONFIG_DIR,
        CALDAVD_PLIST)
    if os.path.exists(oldCalDAVPlistPath):
        oldCalDAVDPlist = readPlist(oldCalDAVPlistPath)
    else:
        oldCalDAVDPlist = { }

    oldCardDAVDPlistPath = os.path.join(options.sourceRoot, CARDDAVD_CONFIG_DIR,
        CARDDAVD_PLIST)
    if os.path.exists(oldCardDAVDPlistPath):
        oldCardDAVDPlist = readPlist(oldCardDAVDPlistPath)
    else:
        oldCardDAVDPlist = { }

    if os.path.exists(newConfigFile):
        newCalDAVDPlist = readPlist(newConfigFile)
    else:
        newCalDAVDPlist = { }

    log("Processing %s and %s" % (oldCalDAVPlistPath, oldCardDAVDPlistPath))
    mergePlist(oldCalDAVDPlist, oldCardDAVDPlist, newCalDAVDPlist)

    newCalDAVDPlist["ServerRoot"] = newServerRootValue
    newCalDAVDPlist["DocumentRoot"] = "Documents"
    newCalDAVDPlist["DataRoot"] = newDataRootValue

    newCalDAVDPlist["EnableCalDAV"] = enableCalDAV
    newCalDAVDPlist["EnableCardDAV"] = enableCardDAV

    log("Writing %s" % (newConfigFile,))
    writePlist(newCalDAVDPlist, newConfigFile)

    # Let the common extra know this was a legacy OS migration by placing 
    # a file into the Config directory
    legacyIndicatorFilePath = FilePath(os.path.join(newConfigDir,
        LEGACY_INDICATOR_FILE))
    legacyIndicatorFilePath.setContent("")


def mergePlist(caldav, carddav, combined):

    # Copy all non-ignored keys
    for key in carddav:
        if key not in ignoredKeys and key not in specialKeys:
            combined[key] = carddav[key]
    for key in caldav:
        if key not in ignoredKeys and key not in specialKeys:
            combined[key] = caldav[key]

    # Copy all "Authentication" sub-keys
    if "Authentication" in caldav:
        if "Authentication" not in combined:
            combined["Authentication"] = { }
        for key in caldav["Authentication"]:
            combined["Authentication"][key] = caldav["Authentication"][key]

        # Reset the wiki settings since URL is only used wieh LionCompatibility
        combined["Authentication"]["Wiki"] = { "Enabled" : True }

    # Strip out any unknown params from the DirectoryService:
    if "DirectoryService" in caldav:
        combined["DirectoryService"] = caldav["DirectoryService"]
        for key in combined["DirectoryService"]["params"].keys():
            if key in ("requireComputerRecord",):
                del combined["DirectoryService"]["params"][key]

    # Merge ports
    if not caldav.get("HTTPPort", 0):
        caldav["HTTPPort"] = 8008
    if not carddav.get("HTTPPort", 0):
        carddav["HTTPPort"] = 8800
    if not caldav.get("SSLPort", 0):
        caldav["SSLPort"] = 8443
    if not carddav.get("SSLPort", 0):
        carddav["SSLPort"] = 8843

    for portType in ["HTTPPort", "SSLPort"]:
        bindPorts = list(set(caldav.get("Bind%ss" % (portType,), [])).union(set(carddav.get("Bind%ss" % (portType,), []))))
        for prev in (carddav, caldav):
            port = prev.get(portType, 0)
            if port and port not in bindPorts:
                bindPorts.append(port)
        bindPorts.sort()
        combined["Bind%ss" % (portType,)] = bindPorts

    combined["HTTPPort"] = caldav["HTTPPort"]
    combined["SSLPort"] = caldav["SSLPort"]

    # Was SSL enabled?
    sslAuthorityChain = ""
    sslCertificate = ""
    sslPrivateKey = ""
    enableSSL = False
    for prev in (carddav, caldav):
        if (prev["SSLPort"] and prev.get("SSLCertificate", "")):
            sslAuthorityChain = prev.get("SSLAuthorityChain", "")
            sslCertificate = prev.get("SSLCertificate", "")
            sslPrivateKey = prev.get("SSLPrivateKey", "")
            enableSSL = True

    combined["SSLAuthorityChain"] = sslAuthorityChain
    combined["SSLCertificate"] = sslCertificate
    combined["SSLPrivateKey"] = sslPrivateKey
    combined["EnableSSL"] = enableSSL

    # If SSL is enabled, redirect HTTP to HTTPS.
    combined["RedirectHTTPToHTTPS"] = enableSSL

    # New DBType value indicating we launch our own Postgres
    combined["DBType"] = ""

    # No DSN value since we launch our own Postgres
    combined["DSN"] = ""

    # Path to SQL file to import previous data from
    combined["DBImportFile"] = "/Library/Server/Calendar and Contacts/DataDump.sql"

    # ConfigRoot is now always "Config"
    combined["ConfigRoot"] = "Config"

    # Remove RunRoot and PIDFile keys so they use the new defaults
    try:
        del combined["RunRoot"]
    except:
        pass
    try:
        del combined["PIDFile"]
    except:
        pass


def log(msg):
    try:
        timestamp = datetime.datetime.now().strftime("%b %d %H:%M:%S")
        msg = "calendarmigrationextra: %s %s" % (timestamp, msg.encode("utf-8"))
        print(msg) # so it appears in /Library/Logs/ServerSetup.log
        with open(LOG, 'a') as output:
            output.write("%s\n" % (msg,)) # so it appears in our log
    except IOError:
        # Could not write to log
        pass

def examinePreviousSystem(sourceRoot, targetRoot, diskAccessor=None):
    """
    Examines the old caldavd.plist and carddavd.plist to see where data
    lives in the previous system.
    """

    if diskAccessor is None:
        diskAccessor = DiskAccessor()

    oldServerRootValue = None
    oldCalDocumentRootValue = None
    oldCalDataRootValue = None
    oldABDocumentRootValue = None

    uid = pwd.getpwnam("calendar").pw_uid
    gid = grp.getgrnam("calendar").gr_gid

    # Try and read old caldavd.plist
    oldCalConfigDir = os.path.join(sourceRoot, CALDAVD_CONFIG_DIR)
    oldCalPlistPath = os.path.join(oldCalConfigDir, CALDAVD_PLIST)
    if diskAccessor.exists(oldCalPlistPath):
        contents = diskAccessor.readFile(oldCalPlistPath)
        oldCalPlist = readPlistFromString(contents)
        log("Found previous caldavd plist at %s" % (oldCalPlistPath,))

        oldServerRootValue = oldCalPlist.get("ServerRoot", None)
        oldCalDocumentRootValue = oldCalPlist.get("DocumentRoot", None)
        oldCalDataRootValue = oldCalPlist.get("DataRoot", None)

    else:
        log("Can't find previous calendar plist at %s" % (oldCalPlistPath,))
        oldCalPlist = None

    # Try and read old carddavd.plist
    oldABConfigDir = os.path.join(sourceRoot, CARDDAVD_CONFIG_DIR)
    oldABPlistPath = os.path.join(oldABConfigDir, CARDDAVD_PLIST)
    if diskAccessor.exists(oldABPlistPath):
        contents = diskAccessor.readFile(oldABPlistPath)
        oldABPlist = readPlistFromString(contents)
        log("Found previous carddavd plist at %s" % (oldABPlistPath,))

        oldABDocumentRootValue = oldABPlist.get("DocumentRoot", None)
    else:
        log("Can't find previous carddavd plist at %s" % (oldABPlistPath,))
        oldABPlist = None

    return (
        oldServerRootValue,
        oldCalDocumentRootValue,
        oldCalDataRootValue,
        oldABDocumentRootValue,
        uid,
        gid
    )


def relocateData(sourceRoot, targetRoot, sourceVersion, oldServerRootValue,
    oldCalDocumentRootValue, oldCalDataRootValue, oldABDocumentRootValue,
    uid, gid, diskAccessor=None):
    """
    Copy data from sourceRoot to targetRoot, except when data is on another
    volume in which case we just refer to it there.
    """

    if diskAccessor is None:
        diskAccessor = DiskAccessor()

    log("RelocateData: sourceRoot=%s, targetRoot=%s, oldServerRootValue=%s, oldCalDocumentRootValue=%s, oldCalDataRootValue=%s, oldABDocumentRootValue=%s, uid=%d, gid=%d" % (sourceRoot, targetRoot, oldServerRootValue, oldCalDocumentRootValue, oldCalDataRootValue, oldABDocumentRootValue, uid, gid))

    newServerRootValue = "/Library/Server/Calendar and Contacts"
    newServerRoot = absolutePathWithRoot(targetRoot, newServerRootValue)

    if sourceVersion < "10.7":
        oldCalDocumentRootValueProcessed = oldCalDocumentRootValue
        oldCalDataRootValueProcessed = oldCalDataRootValue

    else:
        # If there was an old ServerRoot value, process DocumentRoot and
        # DataRoot because those could be relative to ServerRoot

        if sourceVersion < "10.8":
            # DocumentRoot and DataRoot are both relative to ServerRoot
            oldCalDocumentRootValueProcessed = os.path.join(oldServerRootValue,
                oldCalDocumentRootValue)
            oldCalDataRootValueProcessed = os.path.join(oldServerRootValue,
                oldCalDataRootValue)
        else: 
            # Note: this shouldn't happen now that this script only works for
            # sourceVersion < 10.8
            # DocumentRoot is relative to DataRoot, DataRoot is relative to ServerRoot
            oldCalDataRootValueProcessed = os.path.join(oldServerRootValue,
                oldCalDataRootValue)
            oldCalDocumentRootValueProcessed = os.path.join(oldCalDataRootValueProcessed,
                oldCalDocumentRootValue)

    # Set default values for these, possibly overridden below:
    newDataRootValue = "Data"
    newDataRoot = absolutePathWithRoot(
        targetRoot,
        os.path.join(newServerRootValue, newDataRootValue)
    )
    newDocumentRootValue = "Documents"
    newDocumentRoot = os.path.join(newDataRoot, newDocumentRootValue)

    if sourceVersion < "10.7":
        # Before 10.7 there was no ServerRoot; DocumentRoot and DataRoot were separate.
        # Reconfigure so DocumentRoot is under DataRoot is under ServerRoot.  DataRoot
        # will be /Library/Server/Calendar and Contacts/Data unless old DocumentRoot was on
        # an external volume, in which case that becomes the new DataRoot and DocumentRoot
        # moves under DataRoot.
        # /Library/Server/Calendar and Contacts will be new ServerRoot no matter what.

        if oldCalDocumentRootValueProcessed:
            if oldCalDocumentRootValueProcessed.startswith("/Volumes/"): # external volume
                # The old external calendar DocumentRoot becomes the new DataRoot
                newDataRoot = newDataRootValue = os.path.join(os.path.dirname(oldCalDocumentRootValue.rstrip("/")), "Calendar and Contacts Data")
                newDocumentRoot = os.path.join(newDataRoot, newDocumentRootValue)
                # Move aside whatever is there
                if diskAccessor.exists(newDataRoot):
                    renameTo = nextAvailable(newDataRoot, "bak", diskAccessor=diskAccessor)
                    diskAccessor.rename(newDataRoot, renameTo)

                if diskAccessor.exists(absolutePathWithRoot(sourceRoot, oldCalDataRootValueProcessed)):
                    diskAccessor.ditto(
                        absolutePathWithRoot(sourceRoot, oldCalDataRootValueProcessed),
                        newDataRoot
                    )
                else:
                    diskAccessor.mkdir(newDataRoot)

                # Move old DocumentRoot under new DataRoot
                diskAccessor.rename(oldCalDocumentRootValue, newDocumentRoot)
                diskAccessor.chown(newDataRoot, uid, gid, recursive=True)

            else: # The old calendar DocumentRoot is not external
                if oldCalDataRootValueProcessed:
                    if diskAccessor.exists(absolutePathWithRoot(sourceRoot,
                        oldCalDataRootValueProcessed)):
                        diskAccessor.ditto(
                            absolutePathWithRoot(sourceRoot, oldCalDataRootValueProcessed),
                            newDataRoot
                        )
                if diskAccessor.exists(absolutePathWithRoot(sourceRoot,
                    oldCalDocumentRootValueProcessed)):
                    diskAccessor.ditto(
                        absolutePathWithRoot(sourceRoot, oldCalDocumentRootValueProcessed),
                        newDocumentRoot
                    )

        # Old AddressBook DocumentRoot
        if oldABDocumentRootValue:
            newAddressBooks = os.path.join(newDocumentRoot, "addressbooks")
            if oldABDocumentRootValue.startswith("/Volumes/"): # external volume
                diskAccessor.ditto(
                    os.path.join(oldABDocumentRootValue, "addressbooks"),
                    newAddressBooks
                )
            elif diskAccessor.exists(
                absolutePathWithRoot(sourceRoot, oldABDocumentRootValue)
            ):
                diskAccessor.ditto(
                    absolutePathWithRoot(
                        sourceRoot,
                        os.path.join(oldABDocumentRootValue, "addressbooks")
                    ),
                    os.path.join(newDocumentRoot, "addressbooks")
                )


    elif sourceVersion < "10.8":
        # Before 10.8, DocumentRoot and DataRoot were relative to ServerRoot

        if oldServerRootValue:
            if oldServerRootValue.rstrip("/").startswith("/Volumes/"): # external volume
                log("Using external calendar server root: %s" % (oldServerRootValue,))
                # ServerRoot needs to be /Library/Server/Calendar and Contacts
                # Since DocumentRoot is now relative to DataRoot, move DocumentRoot into DataRoot
                newDataRoot = newDataRootValue = os.path.join(oldServerRootValue, "Data")
                if not diskAccessor.exists(newDataRoot):
                    diskAccessor.mkdir(newDataRoot)
                newDocumentRoot = os.path.join(newDataRootValue, "Documents")
                if not diskAccessor.exists(newDocumentRoot):
                    if diskAccessor.exists(os.path.join(oldServerRootValue, "Documents")):
                        diskAccessor.rename(os.path.join(oldServerRootValue, "Documents"),
                            newDocumentRoot)
                    else:
                        diskAccessor.mkdir(newDocumentRoot)
            elif diskAccessor.exists(absolutePathWithRoot(sourceRoot, oldServerRootValue)):
                log("Copying calendar server root: %s" % (newServerRoot,))
                diskAccessor.ditto(
                    absolutePathWithRoot(sourceRoot, oldServerRootValue),
                    newServerRoot
                )
                newDataRoot = os.path.join(newServerRoot, "Data")
                if not diskAccessor.exists(newDataRoot):
                    diskAccessor.mkdir(newDataRoot)
                newDocumentRoot = os.path.join(newDataRoot, "Documents")
                if not diskAccessor.exists(newDocumentRoot):
                    if diskAccessor.exists(os.path.join(newServerRoot, "Documents")):
                        log("Moving Documents into Data root: %s" % (newDataRoot,))
                        diskAccessor.rename(os.path.join(newServerRoot, "Documents"),
                            newDocumentRoot)
                    else:
                        diskAccessor.mkdir(newDocumentRoot)
            else:
                if not diskAccessor.exists(newServerRoot):
                    log("Creating new calendar server root: %s" % (newServerRoot,))
                    diskAccessor.mkdir(newServerRoot)
                newDataRoot = os.path.join(newServerRoot, "Data")
                if not diskAccessor.exists(newDataRoot):
                    log("Creating new data root: %s" % (newDataRoot,))
                    diskAccessor.mkdir(newDataRoot)
                newDocumentRoot = os.path.join(newDataRoot, "Documents")
                if not diskAccessor.exists(newDocumentRoot):
                    log("Creating new document root: %s" % (newDocumentRoot,))
                    diskAccessor.mkdir(newDocumentRoot)

    if not diskAccessor.exists(newServerRoot):
        diskAccessor.mkdir(newServerRoot)
    diskAccessor.chown(newServerRoot, uid, gid, recursive=True)

    if sourceVersion < "10.7":
        # Let calendar server know it should migrate locations and resources
        # from OD
        diskAccessor.touch(os.path.join(newServerRoot,
            "trigger_resource_migration"))

    newServerRootValue, newDataRootValue = relativize(newServerRootValue,
        newDataRootValue)
    newDataRootValue, newDocumentRootValue = relativize(newDataRootValue,
        newDocumentRootValue)


    return (
        newServerRoot,
        newServerRootValue,
        newDataRootValue
    )


def relativize(parent, child):
    """
    If child is really a child of parent, make child relative to parent.
    """
    if child.startswith(parent):
        parent = parent.rstrip("/")
        child = child[len(parent):].strip("/")
    return parent.rstrip("/"), child.rstrip("/")


def absolutePathWithRoot(root, path):
    """
    Combine root and path as long as path does not start with /Volumes/
    """
    if path.startswith("/Volumes/"):
        return path
    else:
        path = path.strip("/")
        return os.path.join(root, path)


def nextAvailable(path, ext, diskAccessor=None):
    """
    If path.ext doesn't exist, return path.ext.  Otherwise return the first path name
    following the path.N.ext pattern that doesn't exist, where N starts at 1
    and increments until a non-existent path name is determined.

    @param path: path to examine
    @type path: C{str}
    @param ext: filename extension to append (don't include ".")
    @type ext: C{str}
    @returns: non-existent path name
    @rtype: C{str}
    """

    if diskAccessor is None:
        diskAccessor = DiskAccessor()

    newPath = "%s.%s" % (path, ext)
    if not diskAccessor.exists(newPath):
        return newPath

    i = 1
    while(True):
        newPath = "%s.%d.%s" % (path, i, ext)
        if not diskAccessor.exists(newPath):
            return newPath
        i += 1


class DiskAccessor(object):
    """
    A wrapper around various disk access methods so that unit tests can easily
    replace these with a stub that doesn't actually require disk access.
    """

    def exists(self, path):
        return os.path.exists(path)

    def readFile(self, path):
        input = file(path)
        contents = input.read()
        input.close()
        return contents

    def mkdir(self, path):
        if not self.exists(path):
            log("Creating directory: %s" % (path,))
            return os.mkdir(path)
        else:
            return

    def rename(self, before, after):
        log("Renaming: %s to %s" % (before, after))
        try:
            return os.rename(before, after)
        except OSError:
            # Can't rename because it's cross-volume; must copy/delete
            self.ditto(before, after)
            return os.remove(before)

    def isfile(self, path):
        return os.path.isfile(path)

    def symlink(self, orig, link):
        return os.symlink(orig, link)

    def chown(self, path, uid, gid, recursive=False):
        os.chown(path, uid, gid)
        if recursive:
            for root, dirs, files in os.walk(path, followlinks=True):
                for name in dirs:
                    os.chown(os.path.join(root, name), uid, gid)
                for name in files:
                    os.chown(os.path.join(root, name), uid, gid)


    def walk(self, path, followlinks=True):
        return os.walk(path, followlinks=followlinks)

    def listdir(self, path):
        return list(os.listdir(path))

    def ditto(self, src, dest):
        log("Copying with ditto: %s to %s" % (src, dest))
        return subprocess.call([DITTO, src, dest])

    def touch(self, path):
        log("Touching: %s" % (path,))
        FilePath(path).setContent("")


if __name__ == '__main__':
    main()
