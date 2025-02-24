FasdUAS 1.101.10   ��   ��    k             l     ��  ��    &    Open_URL_in_Safari.applescript     � 	 	 @     O p e n _ U R L _ i n _ S a f a r i . a p p l e s c r i p t   
  
 l     ��  ��       Open URL in Safari     �   (     O p e n   U R L   i n   S a f a r i      l     ��������  ��  ��        l     ��  ��    + %  Created by Sal Soghoian on 6/20/12.     �   J     C r e a t e d   b y   S a l   S o g h o i a n   o n   6 / 2 0 / 1 2 .      l     ��  ��    = 7  Copyright � 2012-2013 Apple Inc. All rights reserved.     �   n     C o p y r i g h t   �   2 0 1 2 - 2 0 1 3   A p p l e   I n c .   A l l   r i g h t s   r e s e r v e d .      l     ��������  ��  ��        h     �� �� (0 open_url_in_safari Open_URL_in_Safari  k            ! " ! j     �� #
�� 
pare # 4     �� $
�� 
pcls $ m     % % � & &  A M B u n d l e A c t i o n "  ' ( ' j   	 �� )�� 0 nsstring NSString ) 4   	 �� *
�� 
pcls * m     + + � , ,  N S S t r i n g (  - . - l     ��������  ��  ��   .  / 0 / l      �� 1 2��   1 : 4 PROPERTIES USED AS REFERENCES TO INTERFACE OBJECTS     2 � 3 3 h   P R O P E R T I E S   U S E D   A S   R E F E R E N C E S   T O   I N T E R F A C E   O B J E C T S   0  4 5 4 j    �� 6�� 0 urlinputfield URLInputField 6 m    ��
�� 
msng 5  7 8 7 l     ��������  ��  ��   8  9 : 9 l      �� ; <��   ; 5 / THE HANDLER EXECUTED WHEN THE WORKFLOW IS RUN     < � = = ^   T H E   H A N D L E R   E X E C U T E D   W H E N   T H E   W O R K F L O W   I S   R U N   :  > ? > i     @ A @ I      �� B���� @0 runwithinput_fromaction_error_ runWithInput_fromAction_error_ B  C D C o      ���� 	0 input   D  E F E o      ���� 0 anaction anAction F  G�� G o      ���� 0 errorref errorRef��  ��   A k     � H H  I J I r      K L K c      M N M o     ���� 	0 input   N m    ��
�� 
list L o      ���� 	0 input   J  O P O l   ��������  ��  ��   P  Q R Q Z    ( S T���� S =    U V U l    W���� W I   �� X��
�� .corecnte****       **** X o    ���� 	0 input  ��  ��  ��   V m    ����   T k    $ Y Y  Z [ Z r     \ ] \ l    ^���� ^ n    _ ` _ I    �� a���� &0 nslocalizedstring NSLocalizedString a  b�� b m     c c � d d  N O _ I N P U T _ E R R O R��  ��   `  f    ��  ��   ] o      ���� $0 thiserrormessage thisErrorMessage [  e f e r    ! g h g K     i i �� j���� 60 nsapplescripterrormessage NSAppleScriptErrorMessage j o    ���� $0 thiserrormessage thisErrorMessage��   h n       k l k 1     ��
�� 
pcnt l o    ���� 0 errorref errorRef f  m�� m L   " $ n n m   " #��
�� 
msng��  ��  ��   R  o p o l  ) )��������  ��  ��   p  q r q l  ) )�� s t��   s 7 1 STORE THE ACTION PARAMETERS RECORD IN A VARIABLE    t � u u b   S T O R E   T H E   A C T I O N   P A R A M E T E R S   R E C O R D   I N   A   V A R I A B L E r  v w v r   ) 0 x y x n  ) . z { z I   * .�������� 0 
parameters  ��  ��   {  f   ) * y l      |���� | o      ���� ,0 parametersdictionary parametersDictionary��  ��   w  } ~ } l  1 1��  ���    ' ! GET THE VALUE FOR EACH PARAMETER    � � � � B   G E T   T H E   V A L U E   F O R   E A C H   P A R A M E T E R ~  � � � Z   1 � � ��� � � =  1 ; � � � l  1 9 ����� � c   1 9 � � � n  1 7 � � � I   2 7�� ����� 0 valueforkey_ valueForKey_ �  ��� � m   2 3 � � � � �  e r r o r O c c u r e d��  ��   � o   1 2���� ,0 parametersdictionary parametersDictionary � m   7 8��
�� 
bool��  ��   � m   9 :��
�� boovtrue � k   > _ � �  � � � r   > H � � � l  > F ����� � c   > F � � � n  > D � � � I   ? D�� ����� 0 valueforkey_ valueForKey_ �  ��� � m   ? @ � � � � �  e r r o r T i t l e��  ��   � o   > ?���� ,0 parametersdictionary parametersDictionary � m   D E��
�� 
TEXT��  ��   � o      ���� 0 
errortitle 
errorTitle �  � � � r   I S � � � l  I Q ����� � c   I Q � � � n  I O � � � I   J O�� ����� 0 valueforkey_ valueForKey_ �  ��� � m   J K � � � � �  e r r o r M e s s a g e��  ��   � o   I J���� ,0 parametersdictionary parametersDictionary � m   O P��
�� 
TEXT��  ��   � o      ���� 0 errormessage errorMessage �  � � � r   T \ � � � K   T X � � �� ����� 60 nsapplescripterrormessage NSAppleScriptErrorMessage � o   U V���� 0 errormessage errorMessage��   � n       � � � 1   Y [��
�� 
pcnt � o   X Y���� 0 errorref errorRef �  ��� � L   ] _ � � m   ] ^��
�� 
msng��  ��   � k   b � � �  � � � r   b l � � � l  b j ����� � c   b j � � � n  b h � � � I   c h�� ����� 0 valueforkey_ valueForKey_ �  ��� � m   c d � � � � �  t a r g e t U R L��  ��   � o   b c���� ,0 parametersdictionary parametersDictionary � m   h i��
�� 
TEXT��  ��   � o      ���� 0 	targeturl 	targetURL �  � � � r   m w � � � l  m u ����� � c   m u � � � n  m s � � � I   n s�� ����� 0 valueforkey_ valueForKey_ �  ��� � m   n o � � � � �  m a k e N e w W i n d o w��  ��   � o   m n���� ,0 parametersdictionary parametersDictionary � m   s t��
�� 
bool��  ��   � o      ���� 0 makenewwindow makeNewWindow �  � � � l  x x��������  ��  ��   �  � � � Z   x � � ��� � � =  x { � � � o   x y���� 0 makenewwindow makeNewWindow � m   y z��
�� boovtrue � r   ~ � � � � b   ~ � � � � b   ~ � � � � b   ~ � � � � b   ~ � � � � m   ~ � � � � � � @ o s a s c r i p t   - e   ' t e l l   a p p l i c a t i o n   " � m   � � � � � � �  S a f a r i � m   � � � � � � � : "   
 	 a c t i v a t e 
 	 o p e n   l o c a t i o n   " � o   � ����� 0 	targeturl 	targetURL � m   � � � � � � �  " 
 e n d   t e l l ' � o      ����  0 thisunixscript thisUNIXScript��   � r   � � � � � b   � � � � � b   � � � � � b   � � � � � b   � � � � � b   � � � � � b   � � � � � m   � � � � � � � @ o s a s c r i p t   - e   ' t e l l   a p p l i c a t i o n   " � m   � � � � � � �  S a f a r i � m   � � � � �   � "   
 	 a c t i v a t e 
 	 i f   e x i s t s   d o c u m e n t   1   t h e n 
 	 	 s e t   t h e   U R L   o f   d o c u m e n t   1   t o   " � o   � ����� 0 	targeturl 	targetURL � m   � � � 4 "   
 	 e l s e 
 	 	 o p e n   l o c a t i o n   " � o   � ����� 0 	targeturl 	targetURL � m   � � � & " 
 	 e n d   i f 
 e n d   t e l l ' � o      ��  0 thisunixscript thisUNIXScript �  I  � ��~�}
�~ .ascrcmnt****      � **** l  � ��|�{ b   � �	
	 m   � � � B A U T O M A T O R - A C T I O N   t h i s U N I X S c r i p t :  
 l  � ��z�y c   � � o   � ��x�x  0 thisunixscript thisUNIXScript m   � ��w
�w 
TEXT�z  �y  �|  �{  �}    l  � ��v�u�t�v  �u  �t    r   � � n  � � I   � ��s�r�s &0 nslocalizedstring NSLocalizedString �q m   � � �  T A S K _ N A M E�q  �r    f   � � o      �p�p 0 taskname taskName  l  � ��o�n�m�o  �n  �m    O   � � !  k   � �"" #$# r   � �%&% I  � ��l�k'
�l .corecrel****      � null�k  ' �j()
�j 
kocl( m   � ��i
�i 
ucmt) �h*�g
�h 
prdt* K   � �++ �f,-
�f 
pnam, o   � ��e�e 0 taskname taskName- �d./
�d 
shot. m   � ��c
�c boovfals/ �b0�a
�b 
scpt0 o   � ��`�`  0 thisunixscript thisUNIXScript�a  �g  & o      �_�_ 0 thistask thisTask$ 1�^1 I  � ��]23
�] .mcp extkreco       task2 o   � ��\�\ 0 thistask thisTask3 �[4�Z
�[ 
on  4 o   � ��Y�Y 	0 input  �Z  �^  ! m   � �55�                                                                                  mcp   alis    x  14D116                     �07H+   sSRemote Desktop.app                                              ���;1�        ����  	                Applications    �0�q      �;�l     sS sR  414D116:MacAppStore: Applications: Remote Desktop.app  &  R e m o t e   D e s k t o p . a p p    1 4 D 1 1 6  +MacAppStore/Applications/Remote Desktop.app   / ��   6�X6 l  � ��W�V�U�W  �V  �U  �X   � 787 l  � ��T�S�R�T  �S  �R  8 9�Q9 L   � �:: o   � ��P�P 	0 input  �Q   ? ;<; l     �O�N�M�O  �N  �M  < =>= l      �L?@�L  ? = 7 HANDLER CALLED BEFORE ACTION VIEW APPEARS IN WORKFLOW    @ �AA n   H A N D L E R   C A L L E D   B E F O R E   A C T I O N   V I E W   A P P E A R S   I N   W O R K F L O W  > BCB i    DED I      �K�J�I�K 
0 opened  �J  �I  E l     �HFG�H  F !  Nothing to do special here   G �HH 6   N o t h i n g   t o   d o   s p e c i a l   h e r eC IJI l     �G�F�E�G  �F  �E  J KLK l      �DMN�D  M \ V HANDLER CALLED TO STORE THE CURRENT SELECTIONS. CALLED WHEN WORKFLOW IS SAVED OR RUN    N �OO �   H A N D L E R   C A L L E D   T O   S T O R E   T H E   C U R R E N T   S E L E C T I O N S .   C A L L E D   W H E N   W O R K F L O W   I S   S A V E D   O R   R U N  L PQP i    RSR I      �C�B�A�C $0 updateparameters updateParameters�B  �A  S k     rTT UVU l     �@WX�@  W %  reset error indicator property   X �YY >   r e s e t   e r r o r   i n d i c a t o r   p r o p e r t yV Z[Z n    \]\ n   ^_^ I    �?`�>�? $0 setvalue_forkey_ setValue_forKey_` aba m    �=
�= boovfalsb c�<c m    dd �ee  e r r o r O c c u r e d�<  �>  _ I    �;�:�9�; 0 
parameters  �:  �9  ]  f     [ fgf l   �8�7�6�8  �7  �6  g hih l   �5jk�5  j . ( get the contents of the URL input field   k �ll P   g e t   t h e   c o n t e n t s   o f   t h e   U R L   i n p u t   f i e l di mnm r    opo c    qrq l   s�4�3s n   tut I    �2�1�0�2 0 stringvalue stringValue�1  �0  u o    �/�/ 0 urlinputfield URLInputField�4  �3  r m    �.
�. 
TEXTp l     v�-�,v o      �+�+ 0 	targeturl 	targetURL�-  �,  n wxw I   #�*y�)
�* .ascrcmnt****      � ****y l   z�(�'z b    {|{ m    }} �~~ \ A U T O M A T O R - A C T I O N   u p d a t e P a r a m e t e r s :   t a r g e t U R L :  | l   �&�% c    ��� o    �$�$ 0 	targeturl 	targetURL� m    �#
�# 
TEXT�&  �%  �(  �'  �)  x ��� l  $ $�"���"  � 2 , write the values into the parameters record   � ��� X   w r i t e   t h e   v a l u e s   i n t o   t h e   p a r a m e t e r s   r e c o r d� ��� n  $ /��� n  % /��� I   ) /�!�� �! $0 setvalue_forkey_ setValue_forKey_� ��� o   ) *�� 0 	targeturl 	targetURL� ��� m   * +�� ���  t a r g e t U R L�  �   � I   % )���� 0 
parameters  �  �  �  f   $ %� ��� l  0 0����  �  �  � ��� Z   0 r����� =  0 3��� o   0 1�� 0 	targeturl 	targetURL� m   1 2�� ���  � k   6 n�� ��� r   6 >��� n  6 <��� I   7 <���� &0 nslocalizedstring NSLocalizedString� ��� m   7 8�� ��� ( N O _ U R L _ E R R O R _ M E S S A G E�  �  �  f   6 7� o      �� 0 errormessage errorMessage� ��� r   ? G��� n  ? E��� I   @ E���� &0 nslocalizedstring NSLocalizedString� ��� m   @ A�� ��� $ N O _ U R L _ E R R O R _ T I T L E�  �  �  f   ? @� o      �� 0 
errortitle 
errorTitle� ��� n  H S��� n  I S��� I   M S���
� $0 setvalue_forkey_ setValue_forKey_� ��� m   M N�	
�	 boovtrue� ��� m   N O�� ���  e r r o r O c c u r e d�  �
  � I   I M���� 0 
parameters  �  �  �  f   H I� ��� n  T _��� n  U _��� I   Y _���� $0 setvalue_forkey_ setValue_forKey_� ��� o   Y Z�� 0 errormessage errorMessage� ��� m   Z [�� ���  e r r o r M e s s a g e�  �  � I   U Y� �����  0 
parameters  ��  ��  �  f   T U� ��� n  ` k��� n  a k��� I   e k������� $0 setvalue_forkey_ setValue_forKey_� ��� o   e f���� 0 
errortitle 
errorTitle� ���� m   f g�� ���  e r r o r T i t l e��  ��  � I   a e�������� 0 
parameters  ��  ��  �  f   ` a� ���� L   l n�� m   l m��
�� 
msng��  �  �  �  Q ��� l     ��������  ��  ��  � ��� l      ������  �   CLEAR BUTTON ACTION    � ��� *   C L E A R   B U T T O N   A C T I O N  � ��� i    "��� I      ������� 0 	clearurl_ 	clearURL_� ���� o      ���� 
0 sender  ��  ��  � O    ��� I    ������� "0 setstringvalue_ setStringValue_� ���� m   	 
�� ���  ��  ��  � o     ���� 0 urlinputfield URLInputField� ��� l     ��������  ��  ��  � ��� l      ������  � ) # CURRENT SAFARI PAGE BUTTON ACTION    � ��� F   C U R R E N T   S A F A R I   P A G E   B U T T O N   A C T I O N  � ��� i   # &��� I      ������� @0 seturltocurrentlocalsafariurl_ setURLToCurrentLocalSafariURL_� ���� o      ���� 
0 sender  ��  ��  � k     :�� ��� O     ��� Q    ���� k    ��    r     l   ���� n     1    ��
�� 
pURL 4    ��
�� 
docu m   	 
���� ��  ��   o      ���� 0 this_url this_URL �� l   	
	 e     o    ���� 0 this_url this_URL
   in case of blank page    � ,   i n   c a s e   o f   b l a n k   p a g e��  � R      ������
�� .ascrerr ****      � ****��  ��  � r     m     �   o      ���� 0 this_url this_URL� m     �                                                                                  sfri  alis    <  14D116                     �07H+     �
Safari.app                                                       #��_        ����  	                Applications    �0�q      �y�       �  14D116:Applications: Safari.app    
 S a f a r i . a p p    1 4 D 1 1 6  Applications/Safari.app   / ��  �  r    * n   ( I   # (������ &0 stringwithstring_ stringWithString_ �� o   # $���� 0 this_url this_URL��  ��   o    #���� 0 nsstring NSString o      ���� 0 thisnsstring thisNSString �� O  + : I   3 9������ "0 setstringvalue_ setStringValue_ �� o   4 5���� 0 thisnsstring thisNSString��  ��   o   + 0���� 0 urlinputfield URLInputField��  �  !  l     ��������  ��  ��  ! "#" l     ��$%��  $   LOCALIZATION ROUTINE   % �&& *   L O C A L I Z A T I O N   R O U T I N E# '(' i   ' *)*) I      ��+���� &0 nslocalizedstring NSLocalizedString+ ,��, 1      ��
�� 
kMsg��  ��  * L     -- c     ./. n    010 n   232 I    ��4���� H0 "localizedstringforkey_value_table_ "localizedStringForKey_value_table_4 565 1    ��
�� 
kMsg6 787 m    ��
�� 
msng8 9��9 m    ��
�� 
msng��  ��  3 I    �������� 
0 bundle  ��  ��  1  f     / m    ��
�� 
utxt( :��: l     ��������  ��  ��  ��    ;��; l     ��������  ��  ��  ��       ��<=��  < ���� (0 open_url_in_safari Open_URL_in_Safari= �� >?�� (0 open_url_in_safari Open_URL_in_Safari> @@ ����A
�� misccura
�� 
pclsA �BB  A M B u n d l e A c t i o n? ��C��D��EFGHIJ��  C 	������������������
�� 
pare�� 0 nsstring NSString�� 0 urlinputfield URLInputField�� @0 runwithinput_fromaction_error_ runWithInput_fromAction_error_�� 
0 opened  �� $0 updateparameters updateParameters�� 0 	clearurl_ 	clearURL_�� @0 seturltocurrentlocalsafariurl_ setURLToCurrentLocalSafariURL_�� &0 nslocalizedstring NSLocalizedString��  D KK ����L
�� misccura
�� 
pclsL �MM  N S S t r i n g
�� 
msngE �� A����NO���� @0 runwithinput_fromaction_error_ runWithInput_fromAction_error_�� ��P�� P  �������� 	0 input  �� 0 anaction anAction�� 0 errorref errorRef��  N �������������������������� 	0 input  �� 0 anaction anAction�� 0 errorref errorRef�� $0 thiserrormessage thisErrorMessage�� ,0 parametersdictionary parametersDictionary�� 0 
errortitle 
errorTitle�� 0 errormessage errorMessage�� 0 	targeturl 	targetURL�� 0 makenewwindow makeNewWindow��  0 thisunixscript thisUNIXScript�� 0 taskname taskName�� 0 thistask thisTaskO (���� c���������� ���� ��~ � � � � � � � � � ��}5�|�{�z�y�x�w�v�u�t�s�r
�� 
list
�� .corecnte****       ****�� &0 nslocalizedstring NSLocalizedString�� 60 nsapplescripterrormessage NSAppleScriptErrorMessage
�� 
pcnt
�� 
msng�� 0 
parameters  �� 0 valueforkey_ valueForKey_
� 
bool
�~ 
TEXT
�} .ascrcmnt****      � ****
�| 
kocl
�{ 
ucmt
�z 
prdt
�y 
pnam
�x 
shot
�w 
scpt�v �u 
�t .corecrel****      � null
�s 
on  
�r .mcp extkreco       task�� ���&E�O�j j  )�k+ E�O�l��,FO�Y hO)j+ E�O��k+ 	�&e  &��k+ 	�&E�O��k+ 	�&E�O�l��,FO�Y ���k+ 	�&E�O��k+ 	�&E�O�e  a a %a %�%a %E�Y a a %a %�%a %�%a %E�Oa ��&%j O)a k+ E�Oa  .*a a a a  �a !fa "�a #a $ %E�O�a &�l 'UOPO�F �qE�p�oQR�n�q 
0 opened  �p  �o  Q  R  �n hG �mS�l�kST�j�m $0 updateparameters updateParameters�l  �k  S �i�h�g�i 0 	targeturl 	targetURL�h 0 errormessage errorMessage�g 0 
errortitle 
errorTitleT �fd�e�d�c}�b����a�����`�f 0 
parameters  �e $0 setvalue_forkey_ setValue_forKey_�d 0 stringvalue stringValue
�c 
TEXT
�b .ascrcmnt****      � ****�a &0 nslocalizedstring NSLocalizedString
�` 
msng�j s)j+  f�l+ Ob  j+ �&E�O��&%j O)j+  ��l+ O��  =)�k+ 
E�O)�k+ 
E�O)j+  e�l+ O)j+  ��l+ O)j+  ��l+ O�Y hH �_��^�]UV�\�_ 0 	clearurl_ 	clearURL_�^ �[W�[ W  �Z�Z 
0 sender  �]  U �Y�Y 
0 sender  V ��X�X "0 setstringvalue_ setStringValue_�\ b   *�k+ UI �W��V�UXY�T�W @0 seturltocurrentlocalsafariurl_ setURLToCurrentLocalSafariURL_�V �SZ�S Z  �R�R 
0 sender  �U  X �Q�P�O�Q 
0 sender  �P 0 this_url this_URL�O 0 thisnsstring thisNSStringY �N�M�L�K�J�I
�N 
docu
�M 
pURL�L  �K  �J &0 stringwithstring_ stringWithString_�I "0 setstringvalue_ setStringValue_�T ;�  *�k/�,E�O�W 
X  �E�UOb  �k+ E�Ob   *�k+ UJ �H*�G�F[\�E�H &0 nslocalizedstring NSLocalizedString�G �D]�D ]  �C
�C 
kMsg�F  [ �B
�B 
kMsg\ �A�@�?�>�A 
0 bundle  
�@ 
msng�? H0 "localizedstringforkey_value_table_ "localizedStringForKey_value_table_
�> 
utxt�E )j+  ���m+ �& ascr  ��ޭ