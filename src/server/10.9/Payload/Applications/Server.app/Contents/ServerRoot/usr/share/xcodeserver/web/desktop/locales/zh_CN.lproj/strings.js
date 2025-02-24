// Copyright (c) 2009-2013 Apple Inc. All Rights Reserved.
// 
// IMPORTANT NOTE: This file is licensed only for use on Apple-branded
// computers and is subject to the terms and conditions of the Apple Software
// License Agreement accompanying the package this file is a part of.
// You may not port this file to another platform without Apple's written consent.
//
// IMPORTANT NOTE: This file is licensed only for use with the Wiki Server feature
// of the Apple Software and is subject to the terms and conditions of the Apple
// Software License Agreement accompanying the package this file is part of.

if (typeof apple_loc_strings == "undefined") {
	apple_loc_strings = {version:'1.0'};
}

var populateStrings = function(obj) {
	for (aProperty in obj) {
		apple_loc_strings[aProperty] = obj[aProperty];
	}
};

populateStrings({
	"_MenuItem.BigScreen": "打开大屏幕…",
	
	"_XC.BrowserTitle.BotSummary": "Xcode - 所有 Bot",
	"_XC.BrowserTitle.BigScreen": "Xcode - 大屏幕",
	"_XC.BrowserTitle.BotDetail": "Xcode - %@1 %@2",
	"_XC.ProductTitle": "Xcode",
	
	"_XC.Sources.AllBots.Title": "所有 Bot",
	"_XC.Sources.BigScreen.Title": "大屏幕",
	
	"_XC.Breadcrumb.Xcode": "Xcode",
	"_XC.Breadcrumb.Bots.Title": "Bot",
	"_XC.Breadcrumb.BigScreen.Title": "大屏幕",
	
	"_XC.Bot.Integration.Index": "整合 (%@)",
	"_XC.Bot.Default.Title": "未命名的 Bot",
	"_XC.Bot.MenuItem.New.Title": "新建 Bot…",
	"_XC.Bot.MenuItem.Delete.Title": "删除 Bot…",
    "_XC.Bot.MenuItem.DownloadLogs.Title": "下载整合日志…",
	"_XC.Bot.MenuItem.CancelBotRun.Title": "取消整合",
	"_XC.Bot.MenuItem.CancelBotRun.Error": "未能取消整合。请再试一次。",
	"_XC.Bot.LatestIntegration.Title": "最新的整合",
	
	"_XC.Bot.Error.DisplayGeneric": "未能显示 Bot。请尝试刷新页面。",
	"_XC.BotRun.Error.DisplayGeneric": "未能显示整合。它可能已被删除。",
	"_XC.Bot.NotYetRun.Placeholder.Unauthenticated": "登录以开始此 bot 的整合",
	"_XC.Bot.NotYetRun.Placeholder": "点按“整合”以启动此 bot",
	"_XC.BotRun.NotYetCompleted.Placeholder": "整合尚未完成",
	
	"_XC.Bot.Archive": "归档",
	"_XC.Bot.Product": "结果",
	
	"_XC.Bot.LoadingMessage.Delete": "正在删除 Bot…",
	
	"_XC.Grouping.Header.Today": "今天",
	"_XC.Grouping.Header.Yesterday": "昨天",
	"_XC.Grouping.Header.ThisWeek": "最近 7 天",
	"_XC.Grouping.Header.LastWeek": "最近 14 天",
	"_XC.Grouping.Header.Other": "其他",
	
	"_XC.FilterBarView.Filters.All.Title": "全部",
	"_XC.FilterBarView.Filters.All.Tooltip": "显示所有测试结果",
	"_XC.FilterBarView.Filters.Passed.Title": "通过",
	"_XC.FilterBarView.Filters.Passed.Tooltip": "显示通过的测试",
	"_XC.FilterBarView.Filters.Failed.Title": "失败",
	"_XC.FilterBarView.Filters.Failed.Tooltip": "显示失败的测试",
	
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.ModelName.Title": "设备",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.ModelName.Tooltip": "设备",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.NativeArchitecture.Title": "处理器",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.NativeArchitecture.Tooltip": "处理器",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.OperatingSystemVersion.Title": "OS",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.OperatingSystemVersion.Tooltip": "OS",
	
	"_XC.BotRunDetailTable.Header.Title": "测试结果",
	"_XC.BotRunDetailTable.NoTestsFound": "未找到测试",
	"_XC.BotRunDetailTable.Title.TargetDevice.ModelName": "设备",
	"_XC.BotRunDetailTable.Title.TargetDevice.NativeArchitecture": "处理器",
	"_XC.BotRunDetailTable.Title.TargetDevice.OperatingSystemVersion": "OS",
	"_XC.BotRunDetailTable.Title.TargetDevice.Name": "名称",
	
	"_XC.BotList.Header.Title.Name": "名称",
	"_XC.BotList.Header.Title.Status": "状态",
	"_XC.BotList.Header.Title.LastIntegration": "上一次",
	"_XC.BotList.Header.Title.NextIntegration": "下一次",
	
	"_XC.BotList.StatusCard.Title.LatestIntegration": "最新的整合",
	"_XC.BotList.StatusCard.Title.NextIntegration": "下一次整合",
	"_XC.BotList.StatusCard.Title.Products": "最新的下载",
	"_XC.BotList.StatusCard.Empty.LatestIntegration": "没有已完成的整合",
	"_XC.BotList.StatusCard.Empty.NextIntegration": "没有计划的整合",
	"_XC.BotList.StatusCard.Empty.Products": "无下载可用",
	"_XC.BotList.StatusCard.Action.LatestIntegration": "查看摘要",
	"_XC.BotList.StatusCard.Action.NextIntegration": "现在整合",
	"_XC.BotList.StatusCard.AlternateAction.NextIntegration": "清理和整合",
	"_XC.BotList.StatusCard.Action.Products": "查看归档",
	
	"_XC.BotList.StatusCard.Countdown.Integration.Label": "整合 %@",
	"_XC.BotList.StatusCard.Countdown.Days.Label": "天",
	"_XC.BotList.StatusCard.Countdown.Hours.Label": "小时",
	"_XC.BotList.StatusCard.Countdown.Minutes.Label": "分钟",
	"_XC.BotList.StatusCard.Countdown.Interstitial.Queued": "bot 已排队，不久即可进行整合。",
	"_XC.BotList.StatusCard.Countdown.Interstitial.Starting": "正在启动整合…",
	
	"_XC.BotList.StatusCard.Products.Created.Label": "创建于 %@",
	
	"_XC.BotRunSidebar.Empty.Placeholder": "找不到运行的 bot",
	"_XC.BotRunSidebar.Scheme.Integrate": "整合",
	
	"_XC.Bot.Header.Links.Summary.Title": "摘要",
	"_XC.Bot.Header.Links.Tests.Title": "测试",
	"_XC.Bot.Header.Links.Commits.Title": "提交",
	"_XC.Bot.Header.Links.Archives.Title": "归档",
	"_XC.Bot.Header.Links.Logs.Title": "日志",

	"_XC.BotRun.Header.Links.Summary.Title": "（整合 %@）- 摘要",
	"_XC.BotRun.Header.Links.Tests.Title": "（整合 %@）- 测试",
	"_XC.BotRun.Header.Links.Commits.Title": "（整合 %@）- 提交",
	"_XC.BotRun.Header.Links.Archives.Title": "（整合 %@）- 归档",
	"_XC.BotRun.Header.Links.Logs.Title": "（整合 %@）- 日志",
	
	"_XC.Bot.Schedule.Description.Loading": "正在载入日程表…",
	"_XC.Bot.Schedule.Description.Unscheduled": "尚未计划",
	"_XC.Bot.Schedule.Description.Unknown": "未知日程表",
	"_XC.Bot.Schedule.Description.Hourly": "每小时运行 (%@)",
	"_XC.Bot.Schedule.Description.Daily": "每天运行 (%@)",
	"_XC.Bot.Schedule.Description.Weekly": "每周运行 (%@)",
	"_XC.Bot.Schedule.EditDialog.Title": "编辑日程表",
	"_XC.Bot.Schedule.EditDialog.Progress.Updating": "正在更新日程表…",
	"_XC.Bot.Schedule.EditDialog.Progress.Failed": "未能更新 Bot 日程表。请再试一次。",
	
	"_XC.BotRunScheduleEditorView.ScheduleType.Manual": "手动运行",
	"_XC.BotRunScheduleEditorView.ScheduleType.Periodic": "定期运行",
	"_XC.BotRunScheduleEditorView.ScheduleType.Poll": "轮询进行新的提交",
	"_XC.BotRunScheduleEditorView.ScheduleType.Trigger": "使用自定触发脚本提交",
	"_XC.BotRunScheduleEditorView.Schedule.RunThisBot": "%@1 <span class=\"day\"> %@2</span> <span class=\"time\"> %@3</span><span class=\"minutes\">该小时后的 %@4 分钟</span>",
	"_XC.BotRunScheduleEditorView.Schedule.Repeat.Hourly": "每小时",
	"_XC.BotRunScheduleEditorView.Schedule.Repeat.Daily": "每天",
	"_XC.BotRunScheduleEditorView.Schedule.Repeat.Weekly": "每周",
	
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Integrations": "总是",
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Day": "每天一次",
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Week": "每周一次",
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Never": "永不",
	"_XC.BotRunCleanBuildScheduleEditorView.Description": "运行整合前，请移除所有源代码、构建结果和中间产物。",
	
	"_XC.BotRun.ArchiveProductDownloadView.Placeholder": "无下载",
	"_XC.BotRun.ArchiveProductDownloadView.Archive.Title": "归档",
	"_XC.BotRun.ArchiveProductDownloadView.Product.Title": "结果",
	"_XC.BotRun.ArchiveProductDownloadView.Error.Message": "未能获取整合的归档下载信息。请尝试重新载入此页面。",
	"_XC.BotRun.ArchiveProductDownloadView.UnknownFileSize": "未知文件大小",
	
	"_XC.Bot.Control.Run.Title": "整合",
	"_XC.Bot.Control.CleanRun.Title": "清理和整合",
	"_XC.Bot.Control.Pause.Title": "暂停整合",
	"_XC.Bot.Control.Resume.Title": "恢复整合",
	"_XC.Bot.Control.Cancel.Title": "取消整合",
	"_XC.Bot.Control.Run.Error": "未能启动整合。请再试一次。",
	"_XC.Bot.Control.Cancel.Error": "未能取消整合。请再试一次。", 
	"_XC.Bot.Control.Pause.Error": "未能暂停整合。请再试一次。",
	"_XC.Bot.Control.Resume.Error": "未能恢复整合。请再试一次。",
	
	"_XC.Bot.Status.": "排队",
	"_XC.Bot.Status.Ready": "排队",
	"_XC.Bot.Status.Running": "正在运行…",
	"_XC.Bot.Status.Completed": "已完成",
	"_XC.Bot.Status.Failed": "失败",
	"_XC.Bot.Status.Paused": "已暂停",
	"_XC.Bot.Status.Canceled": "已取消",
	"_XC.Bot.SubStatus.Preparing": "正在准备…",
	"_XC.Bot.SubStatus.Checkout": "正在获取来源…",
	"_XC.Bot.SubStatus.Building": "正在整合…",
	"_XC.Bot.SubStatus.Uploading": "即将完成…",
	"_XC.Bot.SubStatus.BuildErrors": "已完成，但有错误",
	"_XC.Bot.SubStatus.TestFailures": "已完成，但有些测试失败",
	"_XC.Bot.SubStatus.Warnings": "已完成，但有警告",
	"_XC.Bot.SubStatus.AnalysisIssues": "已完成，但有分析问题",
	"_XC.Bot.SubStatus.BuildFailed": "构建失败",
	"_XC.Bot.SubStatus.Succeeded": "已成功",
	"_XC.Bot.SubStatus.CheckoutError": "已失败，检查错误",
	"_XC.Bot.SubStatus.CommitHistoryError": "获取提交历史记录失败",
	"_XC.Bot.SubStatus.InternalError": "服务器错误",
	"_XC.Bot.SubStatus.InternalCredentialServerError": "已失败，凭证错误",
	"_XC.Bot.SubStatus.InternalCheckoutError": "已失败，检查错误",
	"_XC.Bot.SubStatus.InternalBuildError": "已失败，构建错误",
	"_XC.Bot.SubStatus.InternalUploadFilesError": "上传文件失败",
	"_XC.Bot.SubStatus.InternalPostTimeseriesError": "上传测试结果失败",
	"_XC.Bot.SubStatus.InternalFinalizeBuildError": "完成整合失败",
	"_XC.Bot.SubStatus.InternalUpdateBotError": "更新 bot 状态失败",
	
	"_XC.Bot.NewBotAssistant.NoRepositories.Error": "此服务器上没有已配置的储存库。管理员可以使用 OS X Server 应用程序添加新的储存库。",
	"_XC.Bot.NewBotAssistant.Unknown.Error": "未能从服务器获取远程储存库。请再试一次。",
	
	"_XC.BotInfoView.Repository.Label": "储存库",
	"_XC.BotInfoView.Repository.Remote.Title": "%@1 - %@2",
	"_XC.BotInfoView.Repository.HostedLocally.Title": "%@1 - 由“%@2”托管",
	"_XC.BotInfoView.Repository.NoRepositories.Description": "未找到远程储存库",
	"_XC.BotInfoView.Repository.Singular.ExtraRepository": "%@ 个其他储存库",
	"_XC.BotInfoView.Repository.Plural.ExtraRepository": "%@ 个其他储存库",
	"_XC.BotInfoView.Repository.Singular.ExtraBranch": "%@ 个其他分支器",
	"_XC.BotInfoView.Repository.Plural.ExtraBranch": "%@ 个其他分支器",
	"_XC.BotInfoView.BranchName.Label": "分支器",
	"_XC.BotInfoView.BranchName.Placeholder": "在此键入分支器名称",
	"_XC.BotInfoView.SchemeName.Label": "方案",
	"_XC.BotInfoView.SchemeName.Placeholder": "在此键入方案名称",
	"_XC.BotInfoView.SchemeName.Description": "用于构建的方案名称。此方案必须是一个共享的方案。",
	"_XC.BotInfoView.WorkspaceOrProjectPath.Label": "项目路径",
	"_XC.BotInfoView.WorkspaceOrProjectPath.Placeholder": "在此键入相关的项目或工作区路径",
	"_XC.BotInfoView.WorkspaceOrProjectPath.Description": "此储存库中的 .xcodeproj 或 .xcworkspace 文件的相关路径，例如“shared/Project.xcodeproj”。",
	"_XC.BotInfoView.Title.Label": "Bot 名称",
	"_XC.BotInfoView.Title.Placeholder": "在此键入您的 bot 名称",
	"_XC.BotInfoView.IntegrateImmediately.Label": "立即整合",
	
	"_XC.BotScheduleInfoView.Schedule.Label": "日程表",
	"_XC.BotScheduleInfoView.Actions.Label": "操作",
	"_XC.BotScheduleInfoView.IntegratePerformsAnalyze.Checkbox.Label": "执行分析操作",
	"_XC.BotScheduleInfoView.IntegratePerformsTest.Checkbox.Label": "执行测试操作",
	"_XC.BotScheduleInfoView.IntegratePerformsArchive.Checkbox.Label": "执行归档操作",
	"_XC.BotScheduleInfoView.BuildFromClean.Label": "清理",
	
	"_XC.BotTestingInfoView.Label": "测试项目用于",
	"_XC.BotTestingInfoView.Type.Mac": "Mac",
	"_XC.BotTestingInfoView.Type.iOS": "iOS",
	"_XC.BotTestingInfoView.RunTestsOn": "在以下设备上运行测试",
	"_XC.BotTestingInfoView.RunTestsOn.AllDevices": "所有设备",
	"_XC.BotTestingInfoView.RunTestsOn.AllSimulators": "所有模拟器",
	"_XC.BotTestingInfoView.RunTestsOn.AllDevicesAndSimulators": "所有设备和模拟器",
	"_XC.BotTestingInfoView.RunTestsOn.SpecificDevices": "特定设备",
	"_XC.BotTestingInfoView.Seperator.Devices": "已连接的设备",
	"_XC.BotTestingInfoView.Seperator.Simulators": "模拟器",
	"_XC.BotTestingInfoView.NoDevices.Placeholder": "找不到设备或模拟器",
	"_XC.BotTestingInfoView.UnknownDevice": "未知设备",
	"_XC.BotTestingInfoView.UnknownSoftwareVersion": "未知软件版本",
	
	"_XC.BotNotificationsInfoView.OnSuccess.Label": "成功时",
	"_XC.BotNotificationsInfoView.OnSuccess.Checkbox.Label": "给所有提交者发送电子邮件",
	"_XC.BotNotificationsInfoView.OnFailure.Label": "失败时",
	"_XC.BotNotificationsInfoView.OnFailure.Checkbox.Label": "给所有提交者发送电子邮件",
	"_XC.BotNotificationsInfoView.AdditionalEmails.Label": "添加附加电子邮件地址，以逗号分隔：",
	"_XC.BotNotificationsInfoView.AdditionalEmails.Placeholder": "在此键入一个或多个有效的电子邮件地址",
	
	"_XC.NewBotAssistant.Title": "创建新 bot",
	"_XC.NewBotAssistant.Title.Step.1": "（步骤 1/4）",
	"_XC.NewBotAssistant.Title.Step.2": "（步骤 2/4）",
	"_XC.NewBotAssistant.Title.Step.3": "（步骤 3/4）",	
	"_XC.NewBotAssistant.Title.Step.4": "（步骤 4/4）",
	"_XC.NewBotAssistant.Button.Next": "继续",
	"_XC.NewBotAssistant.Button.Previous": "后退",
	"_XC.NewBotAssistant.Button.Cancel": "取消",
	"_XC.NewBotAssistant.Button.Create": "创建",
	"_XC.NewBotAssistant.Button.Done": "查看 Bot",
	"_XC.NewBotAssistant.Confirmation": "“%@”Bot 已创建，可以运行或计划。附加的配置选项在新 Bot 的设置视图中可用。",
	"_XC.NewBotAssistant.Error": "未能创建新 Bot，请再试一次。",
	
	"_XC.Bot.IssuesStack.Errors.Title": "错误",
	"_XC.Bot.IssuesStack.AnalysisIssues.Title": "分析问题",
	"_XC.Bot.IssuesStack.Warnings.Title": "警告",
	"_XC.Bot.IssuesStack.Empty.Placeholder": "无错误、分析问题或警告",
	
	"_XC.Bot.Summary.IntegrationResults.Title": "整合结果",
	"_XC.Bot.Summary.LatestIntegration.Title": "最新的整合",
	"_XC.Bot.Summary.LatestIntegration.Status.Title": "状态：",
	"_XC.Bot.Summary.LatestIntegration.Start.Title": "开始时间：",
	"_XC.Bot.Summary.LatestIntegration.Duration.Title": "持续时间：",
	"_XC.Bot.Summary.LatestIntegration.Commits.None": "无新提交",
	"_XC.Bot.Summary.LatestIntegration.Commits.Singular": "1 次提交",
	"_XC.Bot.Summary.LatestIntegration.Commits.Plural": "%@ 次提交",
	"_XC.Bot.Summary.Downloads.Title": "下载",
	
	"_XC.Bot.Summary.Errors.Label": "错误",
	"_XC.Bot.Summary.Warnings.Label": "警告",
	"_XC.Bot.Summary.AnalysisIssues.Label": "分析",
	"_XC.Bot.Summary.TestsTotal.Label": "总测试",
	"_XC.Bot.Summary.TestsPassed.Label": "通过的测试",
	"_XC.Bot.Summary.TestsFailed.Label": "失败的测试",
	"_XC.Bot.Summary.LastRun.LastIntegrationResults.Title": "上一次整合结果",
	"_XC.Bot.Summary.LastRun.Errors.Singular.Count": "1 个错误",
	"_XC.Bot.Summary.LastRun.Errors.Plural.Count": "%@ 个错误",
	"_XC.Bot.Summary.LastRun.Errors.None.Count": "无错误",
	"_XC.Bot.Summary.LastRun.AnalysisIssues.Singular.Count": "1 个分析问题",
	"_XC.Bot.Summary.LastRun.AnalysisIssues.Plural.Count": "%@ 个分析问题",
	"_XC.Bot.Summary.LastRun.AnalysisIssues.None.Count": "无分析问题",
	"_XC.Bot.Summary.LastRun.Issues.Singular.Count": "1 个问题",
	"_XC.Bot.Summary.LastRun.Issues.Plural.Count": "%@ 个问题",
	"_XC.Bot.Summary.LastRun.Issues.None.Count": "无问题",
	"_XC.Bot.Summary.LastRun.Warnings.Singular.Count": "1 个警告",
	"_XC.Bot.Summary.LastRun.Warnings.Plural.Count": "%@ 个警告",
	"_XC.Bot.Summary.LastRun.Warnings.None.Count": "无警告",
	"_XC.Bot.Summary.LastRun.Test.Passes.Count": "%@ 项测试通过",
	"_XC.Bot.Summary.LastRun.Test.Failures.Count": "%@/%@ 项测试失败",
	"_XC.Bot.Summary.LastRun.Test.None.Count": "无测试",
	"_XC.Bot.Summary.LastRun.Test.Summation.Count": "%@/%@ 项测试",
	"_XC.Bot.Summary.Unexpected.Error": "发生意外错误。请尝试重新载入此页面。",
	
	"_XC.Bot.Summary.IntegrationHistory.Title": "整合历史记录",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Title": "构建历史记录",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Legend.Errors": "错误",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Legend.Warnings": "警告",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Legend.Issues": "分析问题",
	"_XC.Bot.Summary.HistoryGraphs.UnitTests.Title": "测试历史记录",
	"_XC.Bot.Summary.HistoryGraphs.UnitTests.Legend.Pass": "通过的测试",
	"_XC.Bot.Summary.HistoryGraphs.UnitTests.Legend.Fail": "失败的测试",
	"_XC.Bot.Summary.HistoryGraphs.Unexpected.Error": "获取图形数据时发生意外错误。请尝试重新载入此页面。",
	"_XC.Bot.Summary.LastIntegrationDetails.Title": "上一次整合详细信息",
	"_XC.Bot.Summary.IntegrationDetails.Title": "整合详细信息",
	
	"_XC.Bot.Tests.Results.Heading.Integration": "整合",
	"_XC.Bot.Tests.Results.Heading.UnitTests": "测试",
	"_XC.Bot.Tests.Results.Heading.TotalTests": "总计",
	"_XC.Bot.Tests.Results.Heading.FailedTest": "失败",
	"_XC.Bot.Tests.Results.Pass.Title": "通过",
	"_XC.Bot.Tests.Results.Fail.Title": "失败",
	"_XC.Bot.Tests.Results.NoResult.Title": "无结果",
	"_XC.Bot.Tests.Results.Unexpected.Error": "获取测试数据时发生意外错误。请尝试重新载入此页面。",
	"_XC.Bot.Tests.NoFail": "无失败的测试",
	
	"_XC.Bot.CommitHistory.BotRun.Empty.Placeholder": "此整合中无新提交",
	"_XC.Bot.CommitHistory.Bot.Empty.Placeholder": "最近整合中无新提交",
	"_XC.Bot.CommitHistory.Files.Modified.Singular": "%@ 个文件已修改",
	"_XC.Bot.CommitHistory.Files.Modified.Plural": "%@ 个文件已修改",
	"_XC.Bot.CommitHistory.Unexpected.Error": "未能显示此整合的提交历史记录",
	"_XC.Bot.CommitHistory.Commit.NoMessage": "未提供提交信息。",
	
	"_XC.Bot.Logs.Title": "日志",
	"_XC.Bot.Logs.IntegrationDetails.Title": "错误、警告和分析问题",
	"_XC.Bot.Logs.BuildAgent.Title": "构建代理日志",
	"_XC.Bot.Logs.SCM.Title": "来源控制日志",
	"_XC.Bot.Logs.SCM.Empty.Placeholder": "无来源控制日志",
	"_XC.Bot.Logs.Build.Title": "构建日志",
	"_XC.Bot.Logs.Build.Empty.Placeholder": "无构建日志",
	"_XC.Bot.Logs.Empty.Placeholder": "找不到日志",
	"_XC.Bot.Logs.Log.Bot.Empty.Placeholder": "日志不可用于此整合",
	"_XC.Bot.Logs.Log.BotRun.Empty.Placeholder": "日志不可用于此整合",
	"_XC.Bot.Logs.Log.Pruned": "此整合的日志已被删除",
	"_XC.Bot.Logs.Unexpected.Error": "未能显示日志",
	
	"_XC.Bot.Archives.Unknown.Filename": "未知",
	"_XC.Bot.Archives.ListTitle": "归档",
	"_XC.Bot.Archives.List.Archive": "归档",
	"_XC.Bot.Archives.List.Archive.DeleteConfirmationMessage": "您确定要删除此归档吗？您将无法撤销此操作。",
	"_XC.Bot.Archives.List.Archive.DeleteDialogTitle": "删除归档",
	"_XC.Bot.Archives.List.Archive.DeleteFailedMessage": "未能删除构建归档/结果。请再试一次。",
	"_XC.Bot.Archives.List.Product": "结果",
	"_XC.Bot.Archives.List.Product.DeleteConfirmationMessage": "您确定要删除此结果吗？您将无法撤销此操作。",
	"_XC.Bot.Archives.List.Product.DeleteDialogTitle": "删除结果",
	"_XC.Bot.Archives.List.DeleteButton": "删除",
	"_XC.Bot.Archives.List.Header.Filetype": "类型",
	"_XC.Bot.Archives.List.Header.Filename": "名称",
	"_XC.Bot.Archives.List.Header.LastModified": "日期",
	"_XC.Bot.Archives.List.Header.IntegrationNumber": "整合",
	"_XC.Bot.Archives.List.Header.Filesize": "大小",
	"_XC.Bot.Archives.List.Header.Filesize": "大小",
	"_XC.Bot.Archives.Placeholder.NoArchivesFound": "找不到归档",
	"_XC.Bot.Archives.Pruned": "此整合的归档已被删除",
	
	"_XC.Bot.Settings.MenuItem.Title": "Bot 设置…",
	"_XC.Bot.Settings.Dialog.Title": "Bot 设置",
	"_XC.Bot.Settings.Fetch.Error.Title": "未能获取 Bot 设置。请再试一次。",
	"_XC.Bot.Settings.Save.Button.Title": "存储",
	"_XC.Bot.Settings.Save.Error": "未能存储 Bot 设置。请再试一次。",
	"_XC.Bot.Settings.Unexpected.Error": "发生意外错误。请再试一次。",
	"_XC.Bot.Settings.Tabs.Server": "服务器",
	"_XC.Bot.Settings.Tabs.Schedule": "日程表",
	"_XC.Bot.Settings.Tabs.Testing": "测试",
	"_XC.Bot.Settings.Tabs.Notifications": "通知",
	"_XC.Bot.Settings.BotSettingsUpdated": "_XC.Bot.Settings.BotSettingsUpdated",
    
    "_XC.Bot.DownloadLogs.Dialog.Title": "下载整合 (%@) 日志",
    "_XC.Bot.DownloadLogs.CancelButton.Title": "取消",
    "_XC.Bot.DownloadLogs.DownloadButton.Title": "下载",
    "_XC.Bot.DownloadLogs.Logs.Label": "所包括的日志",
    "_XC.Bot.DownloadLogs.BuildLogs.Checkbox.Label": "构建日志",
    "_XC.Bot.DownloadLogs.SourceControlLogs.Checkbox.Label": "来源控制日志",
    "_XC.Bot.DownloadLogs.XcodeServerLogs.Checkbox.Label": "Xcode 服务器构建服务输出",
    "_XC.Bot.DownloadLogs.XcodeOutput.Checkbox.Label": "原始“xcodebuild”构建捆绑包",
    "_XC.Bot.DownloadLogs.BotConfigAndVersions.Checkbox.Label": "Bot 配置和版本信息",
    "_XC.Bot.DownloadLogs.NoLogsAvailable.Alert": "所选整合没有可用的日志。它们有可能已被服务器自动删除。",
    "_XC.Bot.DownloadLogs.NeverRun.Alert": "此 bot 从未运行过，因此当前没有可用的日志。",
    "_XC.Bot.DownloadLogs.Error.Alert": "获取此整合的日志信息时发生错误。请稍后再试一次，或者联系您的服务器管理员。",
	
	"_XC.Bot.RunAudit.Empty.Placeholder": "找不到审核历史记录",
	
	"_Dialogs.Delete.Notification.NotBotOwner.Error": "只有此 Bot 的所有者或管理员才可删除此 Bot。",
	"_Dialogs.Delete.Notification.NotBotOwner.Error": "只有此 Bot 的所有者或管理员才可删除此 Bot。",
	
	// Do not localize these help links.
	"_XC.Help.Desktop.URL": "https://help.apple.com/xcode/mac/1.0/",
	"_XC.Help.iPad.URL": "https://help.apple.com/xcode/ipad/1.0/",
	
	// WAI ARIA - Accessiblity
	"_XC.Accessibility.Button.Delete": "删除",
	"_XC.Accessibility.Navigation.IntegrationMenu": "整合菜单",
	"_XC.Accessibility.Label.Devices": "设备",
	"_XC.Accessibility.Label.LastIntegration": "最新的整合",
	"_XC.Accessibility.Label.NextIntegration": "下一次整合",
	"_XC.Accessibility.Label.LatestDownloads": "最新的下载",
	"_XC.Accessibility.Label.ListStatusView": "列表状态视图",
	"_XC.Accessibility.Label.Downloads": "下载",
	"_XC.Accessibility.Label.IntegrateNumber": "整合号码",
	"_XC.Accessibility.Label.Header": "标头",
	"_XC.Accessibility.Label.Details": "详细信息",
	"_XC.Accessibility.Label.DeviceInfo": "设备信息",
	"_XC.Accessibility.Label.TestResultsList": "测试结果列表",
	"_XC.Accessibility.Label.TestSucceed": "测试成功",
	"_XC.Accessibility.Label.Fail": "失败",
	"_XC.Accessibility.Label.Success": "成功",
	"_XC.Accessibility.Label.TabNavigation": "标签导航",
	"_XC.Accessibility.Label.Content": "内容",
	"_XC.Accessibility.Label.TestsResult": "测试结果",
	"_XC.Accessibility.Label.ResultSummary": "结果摘要",
	"_XC.Accessibility.Label.IntegrationResult": "历史记录",
	"_XC.Accessibility.Label.IntegrationResult": "历史记录",
	"_XC.Accessibility.Label.BotSummary": "Bot 摘要"
});
