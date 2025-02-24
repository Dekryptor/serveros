FasdUAS 1.101.10   ��   ��    k             l     ��  ��       Set_Volume.applescript     � 	 	 0     S e t _ V o l u m e . a p p l e s c r i p t   
  
 l     ��  ��       Set Volume     �        S e t   V o l u m e      l     ��������  ��  ��        l     ��  ��    + %  Created by Sal Soghoian on 6/28/12.     �   J     C r e a t e d   b y   S a l   S o g h o i a n   o n   6 / 2 8 / 1 2 .      l     ��  ��    = 7  Copyright � 2012-2013 Apple Inc. All rights reserved.     �   n     C o p y r i g h t   �   2 0 1 2 - 2 0 1 3   A p p l e   I n c .   A l l   r i g h t s   r e s e r v e d .      l     ��������  ��  ��        h     �� �� 0 
set_volume 
Set_Volume  k            ! " ! j     �� #
�� 
pare # 4     �� $
�� 
pcls $ m     % % � & &  A M B u n d l e A c t i o n "  ' ( ' l     ��������  ��  ��   (  ) * ) i   	  + , + I      �� -���� @0 runwithinput_fromaction_error_ runWithInput_fromAction_error_ -  . / . o      ���� 	0 input   /  0 1 0 o      ���� 0 anaction anAction 1  2�� 2 o      ���� 0 errorref errorRef��  ��   , k     � 3 3  4 5 4 I    �� 6��
�� .ascrcmnt****      � **** 6 l     7���� 7 m      8 8 � 9 9 < A U T O M A T O R - A C T I O N   r u n W i t h I n p u t :��  ��  ��   5  : ; : l    < = > < r     ? @ ? c    	 A B A o    ���� 	0 input   B m    ��
�� 
list @ o      ���� 	0 input   = a [ In an ASOC action like this one, be sure to convert input from NSArray to AppleScript list    > � C C �   I n   a n   A S O C   a c t i o n   l i k e   t h i s   o n e ,   b e   s u r e   t o   c o n v e r t   i n p u t   f r o m   N S A r r a y   t o   A p p l e S c r i p t   l i s t ;  D E D l   ��������  ��  ��   E  F G F l   �� H I��   H 7 1 STORE THE ACTION PARAMETERS RECORD IN A VARIABLE    I � J J b   S T O R E   T H E   A C T I O N   P A R A M E T E R S   R E C O R D   I N   A   V A R I A B L E G  K L K r     M N M n    O P O I    �������� 0 
parameters  ��  ��   P  f     N l      Q���� Q o      ���� ,0 parametersdictionary parametersDictionary��  ��   L  R S R l   �� T U��   T $  GET THE VALUES FOR PARAMETERS    U � V V <   G E T   T H E   V A L U E S   F O R   P A R A M E T E R S S  W X W r     Y Z Y c     [ \ [ c     ] ^ ] l    _���� _ n     ` a ` o    ���� 0 shouldMuteVolume   a o    ���� ,0 parametersdictionary parametersDictionary��  ��   ^ m    ��
�� 
long \ m    ��
�� 
bool Z o      ���� $0 shouldmutevolume shouldMuteVolume X  b c b r    % d e d l   # f���� f c    # g h g l   ! i���� i n    ! j k j o    !���� 0 volumeSetting   k o    ���� ,0 parametersdictionary parametersDictionary��  ��   h m   ! "��
�� 
long��  ��   e o      ���� 0 volumesetting volumeSetting c  l m l l  & &��������  ��  ��   m  n o n I  & -�� p��
�� .ascrcmnt****      � **** p l  & ) q���� q b   & ) r s r m   & ' t t � u u F A U T O M A T O R - A C T I O N   s h o u l d M u t e V o l u m e :   s o   ' (���� $0 shouldmutevolume shouldMuteVolume��  ��  ��   o  v w v I  . 5�� x��
�� .ascrcmnt****      � **** x l  . 1 y���� y b   . 1 z { z m   . / | | � } } @ A U T O M A T O R - A C T I O N   v o l u m e S e t t i n g :   { o   / 0���� 0 volumesetting volumeSetting��  ��  ��   w  ~  ~ l  6 6��������  ��  ��     � � � r   6 > � � � l  6 < ����� � n  6 < � � � I   7 <�� ����� &0 nslocalizedstring NSLocalizedString �  ��� � m   7 8 � � � � �  T A S K _ N A M E��  ��   �  f   6 7��  ��   � o      ���� 0 taskname taskName �  � � � l  ? ?��������  ��  ��   �  � � � Z   ? V � ��� � � =  ? B � � � o   ? @���� $0 shouldmutevolume shouldMuteVolume � m   @ A��
�� boovtrue � r   E L � � � b   E J � � � b   E H � � � m   E F � � � � � N o s a s c r i p t   - e   ' s e t   v o l u m e   o u t p u t   v o l u m e   � o   F G���� 0 volumesetting volumeSetting � m   H I � � � � � &   w i t h   o u t p u t   m u t e d ' � o      ���� 0 
unixscript 
UNIXScript��   � r   O V � � � b   O T � � � b   O R � � � m   O P � � � � � N o s a s c r i p t   - e   ' s e t   v o l u m e   o u t p u t   v o l u m e   � o   P Q���� 0 volumesetting volumeSetting � m   R S � � � � � ,   w i t h o u t   o u t p u t   m u t e d ' � o      ���� 0 
unixscript 
UNIXScript �  � � � l  W W��������  ��  ��   �  � � � I  W `�� ���
�� .ascrcmnt****      � **** � l  W \ ����� � b   W \ � � � m   W Z � � � � � : A U T O M A T O R - A C T I O N   U N I X S c r i p t :   � o   Z [���� 0 
unixscript 
UNIXScript��  ��  ��   �  � � � l  a a��������  ��  ��   �  � � � O   a � � � � k   g � � �  � � � r   g � � � � I  g ����� �
�� .corecrel****      � null��   � �� � �
�� 
kocl � m   k n��
�� 
ucmt � �� ���
�� 
prdt � K   q � � � �� � �
�� 
pnam � o   t u���� 0 taskname taskName � �� � �
�� 
shot � m   x y��
�� boovfals � �� ���
�� 
scpt � o   | }���� 0 
unixscript 
UNIXScript��  ��   � o      ���� 0 thistask thisTask �  ��� � I  � ��� � �
�� .mcp extkreco       task � o   � ����� 0 thistask thisTask � �� ���
�� 
on   � o   � ����� 	0 input  ��  ��   � m   a d � ��                                                                                  mcp   alis    x  14D116                     �07H+   sSRemote Desktop.app                                              ���;1�        ����  	                Applications    �0�q      �;�l     sS sR  414D116:MacAppStore: Applications: Remote Desktop.app  &  R e m o t e   D e s k t o p . a p p    1 4 D 1 1 6  +MacAppStore/Applications/Remote Desktop.app   / ��   �  � � � l  � ���������  ��  ��   �  ��� � L   � � � � o   � ����� 	0 input  ��   *  � � � l     ��������  ��  ��   �  � � � l     �� � ���   �   LOCALIZATION ROUTINE    � � � � *   L O C A L I Z A T I O N   R O U T I N E �  � � � i     � � � I      � ��~� &0 nslocalizedstring NSLocalizedString �  ��} � 1      �|
�| 
kMsg�}  �~   � L      � � c      � � � n     � � � n    � � � I    �{ ��z�{ H0 "localizedstringforkey_value_table_ "localizedStringForKey_value_table_ �  � � � 1    �y
�y 
kMsg �  � � � m    �x
�x 
msng �  ��w � m    �v
�v 
msng�w  �z   � I    �u�t�s�u 
0 bundle  �t  �s   �  f      � m    �r
�r 
utxt �  ��q � l     �p�o�n�p  �o  �n  �q     ��m � l     �l�k�j�l  �k  �j  �m       �i � ��i   � �h�h 0 
set_volume 
Set_Volume � �g  � ��g 0 
set_volume 
Set_Volume �  � � �f�e �
�f misccura
�e 
pcls � � � �  A M B u n d l e A c t i o n � �d ��c � ��d   � �b�a�`
�b 
pare�a @0 runwithinput_fromaction_error_ runWithInput_fromAction_error_�` &0 nslocalizedstring NSLocalizedString�c   � �_ ,�^�] � ��\�_ @0 runwithinput_fromaction_error_ runWithInput_fromAction_error_�^ �[ ��[  �  �Z�Y�X�Z 	0 input  �Y 0 anaction anAction�X 0 errorref errorRef�]   � 	�W�V�U�T�S�R�Q�P�O�W 	0 input  �V 0 anaction anAction�U 0 errorref errorRef�T ,0 parametersdictionary parametersDictionary�S $0 shouldmutevolume shouldMuteVolume�R 0 volumesetting volumeSetting�Q 0 taskname taskName�P 0 
unixscript 
UNIXScript�O 0 thistask thisTask �  8�N�M�L�K�J�I�H t | ��G � � � � � ��F�E�D�C�B�A�@�?�>�=�<
�N .ascrcmnt****      � ****
�M 
list�L 0 
parameters  �K 0 shouldMuteVolume  
�J 
long
�I 
bool�H 0 volumeSetting  �G &0 nslocalizedstring NSLocalizedString
�F 
kocl
�E 
ucmt
�D 
prdt
�C 
pnam
�B 
shot
�A 
scpt�@ �? 
�> .corecrel****      � null
�= 
on  
�< .mcp extkreco       task�\ ��j O��&E�O)j+ E�O��,�&�&E�O��,�&E�O�%j O�%j O)�k+ E�O�e  �%�%E�Y 	�%�%E�Oa �%j Oa  .*a a a a �a fa �a a  E�O�a �l UO� � �; ��:�9 � ��8�; &0 nslocalizedstring NSLocalizedString�: �7 ��7  �  �6
�6 
kMsg�9   � �5
�5 
kMsg � �4�3�2�1�4 
0 bundle  
�3 
msng�2 H0 "localizedstringforkey_value_table_ "localizedStringForKey_value_table_
�1 
utxt�8 )j+  ���m+ �&ascr  ��ޭ