FasdUAS 1.101.10   ��   ��    k             l     ��������  ��  ��        i      	 
 	 I     �� ��
�� .helphdhp****      � ****  l      ����  o      ���� 0 	arguments  ��  ��  ��   
 k    U       l     ��������  ��  ��        l     ��  ��      split the arguments     �   (   s p l i t   t h e   a r g u m e n t s      r         n        1    ��
�� 
txdl  1     ��
�� 
ascr  o      ���� 0 prevtids prevTIDs      r        m       �      , , ,  n      ! " ! 1    
��
�� 
txdl " 1    ��
�� 
ascr   # $ # r     % & % n     ' ( ' 2   ��
�� 
citm ( o    ���� 0 	arguments   & o      ����  0 splitarguments splitArguments $  ) * ) r     + , + o    ���� 0 prevtids prevTIDs , n      - . - 1    ��
�� 
txdl . 1    ��
�� 
ascr *  / 0 / l   ��������  ��  ��   0  1 2 1 l   �� 3 4��   3   get each argument    4 � 5 5 $   g e t   e a c h   a r g u m e n t 2  6 7 6 r     8 9 8 n     : ; : 4    �� <
�� 
cobj < m    ����  ; o    ����  0 splitarguments splitArguments 9 o      ���� "0 currentlocation currentLocation 7  = > = r    % ? @ ? n    # A B A 4     #�� C
�� 
cobj C m   ! "����  B o     ����  0 splitarguments splitArguments @ o      ���� 0 	booktitle 	bookTitle >  D E D r   & , F G F n   & * H I H 4   ' *�� J
�� 
cobj J m   ( )����  I o   & '����  0 splitarguments splitArguments G o      ����  0 remotelocation remoteLocation E  K L K l  - -��������  ��  ��   L  M N M l  - -�� O P��   O   write out a temp file    P � Q Q ,   w r i t e   o u t   a   t e m p   f i l e N  R S R r   - 4 T U T b   - 2 V W V b   - 0 X Y X m   - . Z Z � [ [ 
 / t m p / Y o   . /���� 0 	booktitle 	bookTitle W m   0 1 \ \ � ] ] 0   D i d   F i n i s h   R e d i r e c t . t x t U o      ���� $0 tempfilelocation tempFileLocation S  ^ _ ^ I  5 >�� `��
�� .sysoexecTEXT���     TEXT ` b   5 : a b a m   5 6 c c � d d   / b i n / e c h o   ' 0 '   >   b n   6 9 e f e 1   7 9��
�� 
strq f o   6 7���� $0 tempfilelocation tempFileLocation��   _  g h g l  ? ?��������  ��  ��   h  i j i l  ? ?�� k l��   k I C if we are already in ~/Library/Documentation/Help/, don't redirect    l � m m �   i f   w e   a r e   a l r e a d y   i n   ~ / L i b r a r y / D o c u m e n t a t i o n / H e l p / ,   d o n ' t   r e d i r e c t j  n o n Z   ?G p q���� p G   ? L r s r H   ? C t t E   ? B u v u o   ? @���� "0 currentlocation currentLocation v m   @ A w w � x x 
 U s e r s s H   F J y y E   F I z { z o   F G���� "0 currentlocation currentLocation { m   G H | | � } } * L i b r a r y / D o c u m e n t a t i o n q k   OC ~ ~   �  l  O O��������  ��  ��   �  � � � l  O O�� � ���   � + % get the path to the correct location    � � � � J   g e t   t h e   p a t h   t o   t h e   c o r r e c t   l o c a t i o n �  � � � r   O b � � � b   O ` � � � b   O \ � � � b   O Z � � � l  O V ����� � c   O V � � � l  O T ����� � I  O T�� ���
�� .earsffdralis        afdr � m   O P��
�� afdrcusr��  ��  ��   � m   T U��
�� 
TEXT��  ��   � m   V Y � � � � � 6 L i b r a r y : D o c u m e n t a t i o n : H e l p : � o   Z [���� 0 	booktitle 	bookTitle � m   \ _ � � � � � * : i n t e r f a c e : i n d e x . h t m l � o      ���� "0 newlocationpath newLocationPath �  � � � r   c q � � � I  c o�� ���
�� .coredoexbool       obj  � n   c k � � � 4   f k�� �
�� 
file � o   i j���� "0 newlocationpath newLocationPath � m   c f � ��                                                                                  MACS  alis    l  
NetInstall                 �ExwH+     �
Finder.app                                                       �*Ɨ�q        ����  	                CoreServices    �E��      ƘK�       �   o   n  1NetInstall:System:Library:CoreServices:Finder.app    
 F i n d e r . a p p   
 N e t I n s t a l l  &System/Library/CoreServices/Finder.app  / ��  ��   � o      ���� &0 newlocationexists newLocationExists �  � � � l  r r��������  ��  ��   �  � � � l  r r�� � ���   � 5 / if the location exists, then redirect the user    � � � � ^   i f   t h e   l o c a t i o n   e x i s t s ,   t h e n   r e d i r e c t   t h e   u s e r �  � � � Z   rA � ����� � o   r s���� &0 newlocationexists newLocationExists � k   v= � �  � � � l  v v��������  ��  ��   �  � � � r   v y � � � o   v w���� "0 newlocationpath newLocationPath � o      ����  0 newlocationurl newLocationURL �  � � � l  z z��������  ��  ��   �  � � � l  z z�� � ���   � &   replace the colons with slashes    � � � � @   r e p l a c e   t h e   c o l o n s   w i t h   s l a s h e s �  � � � r   z  � � � 1   z }��
�� 
txdl � o      ���� 80 originaltextitemdelimeters originalTextItemDelimeters �  � � � r   � � � � � m   � � � � � � �  : � 1   � ���
�� 
txdl �  � � � r   � � � � � n  � � � � � 2  � ���
�� 
citm � o   � �����  0 newlocationurl newLocationURL � o      ����  0 newlocationurl newLocationURL �  � � � r   � � � � � m   � � � � � � �  / � 1   � ���
�� 
txdl �  � � � r   � � � � � n   � � � � � 7  � ��� � �
�� 
cobj � m   � �����  � m   � ������� � o   � �����  0 newlocationurl newLocationURL � o      ����  0 newlocationurl newLocationURL �  � � � O  � � � � � r   � � � � � b   � � � � � 4   � ��� �
�� 
cobj � m   � �����  � l  � � ����� � b   � � � � � J   � � � �  ��� � m   � � � � � � �  ��   � 1   � ���
�� 
rest��  ��   � o      ����  0 newlocationurl newLocationURL � o   � �����  0 newlocationurl newLocationURL �  � � � r   � � � � � o   � ����� 80 originaltextitemdelimeters originalTextItemDelimeters � 1   � ���
�� 
txdl �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   � / ) replace the spaces with encoded versions    � � � � R   r e p l a c e   t h e   s p a c e s   w i t h   e n c o d e d   v e r s i o n s �  � � � r   � � � � � 1   � ���
�� 
txdl � o      ���� 80 originaltextitemdelimeters originalTextItemDelimeters �  � � � r   � � � � � m   � � � � � � �    � 1   � ���
�� 
txdl �  � � � r   � �   n  � � 2  � ���
�� 
citm o   � �����  0 newlocationurl newLocationURL o      ����  0 newlocationurl newLocationURL �  r   � � m   � � �		  % 2 0 1   � ���
�� 
txdl 

 r   � � b   � � m   � � �   o   � �����  0 newlocationurl newLocationURL o      ����  0 newlocationurl newLocationURL  r   � � o   � ��� 80 originaltextitemdelimeters originalTextItemDelimeters 1   � ��~
�~ 
txdl  l  � ��}�|�{�}  �|  �{    l  � ��z�z   $  add the file:/// to the front    � <   a d d   t h e   f i l e : / / /   t o   t h e   f r o n t  r   � �  b   � �!"! m   � �## �$$  f i l e : / / /" o   � ��y�y  0 newlocationurl newLocationURL  o      �x�x  0 newlocationurl newLocationURL %&% l  � ��w�v�u�w  �v  �u  & '(' l  � ��t)*�t  ) + % get the anchor from the original URL   * �++ J   g e t   t h e   a n c h o r   f r o m   t h e   o r i g i n a l   U R L( ,-, r   � �./. 1   � ��s
�s 
txdl/ o      �r�r 80 originaltextitemdelimeters originalTextItemDelimeters- 010 r   �232 m   � �44 �55  #3 1   � �q
�q 
txdl1 676 Z  "89�p:8 = ;<; m  �o�o < n  
=>= 1  
�n
�n 
leng> l ?�m�l? n  @A@ 2 �k
�k 
citmA o  �j�j "0 currentlocation currentLocation�m  �l  9 r  BCB b  DED m  FF �GG  #E n  HIH 4  �iJ
�i 
cobjJ m  �h�h I l K�g�fK n  LML 2 �e
�e 
citmM o  �d�d "0 currentlocation currentLocation�g  �f  C o      �c�c &0 newlocationanchor newLocationAnchor�p  : r  "NON m   PP �QQ  O o      �b�b &0 newlocationanchor newLocationAnchor7 RSR r  #(TUT o  #$�a�a 80 originaltextitemdelimeters originalTextItemDelimetersU 1  $'�`
�` 
txdlS VWV l ))�_�^�]�_  �^  �]  W XYX l ))�\Z[�\  Z #  append the anchor to the URL   [ �\\ :   a p p e n d   t h e   a n c h o r   t o   t h e   U R LY ]^] r  )._`_ b  ),aba o  )*�[�[  0 newlocationurl newLocationURLb o  *+�Z�Z &0 newlocationanchor newLocationAnchor` o      �Y�Y  0 newlocationurl newLocationURL^ cdc l //�X�W�V�X  �W  �V  d efe l //�Ugh�U  g * $ open the application in Help Viewer   h �ii H   o p e n   t h e   a p p l i c a t i o n   i n   H e l p   V i e w e rf jkj O /;lml I 5:�Tn�S
�T .GURLGURLnull���    obj n o  56�R�R  0 newlocationurl newLocationURL�S  m m  /2oo�                                                                                  hbwr  alis    |  
NetInstall                 �ExwH+     �HelpViewer.app                                                   ��Ɓk�        ����  	                CoreServices    �E��      Ɓ�*       �   o   n  5NetInstall:System:Library:CoreServices:HelpViewer.app     H e l p V i e w e r . a p p   
 N e t I n s t a l l  *System/Library/CoreServices/HelpViewer.app  / ��  k p�Qp l <<�P�O�N�P  �O  �N  �Q  ��  ��   � q�Mq l BB�L�K�J�L  �K  �J  �M  ��  ��   o rsr l HH�I�H�G�I  �H  �G  s tut l HH�Fvw�F  v   update the temp file   w �xx *   u p d a t e   t h e   t e m p   f i l eu yzy I HS�E{�D
�E .sysoexecTEXT���     TEXT{ b  HO|}| m  HK~~ �   / b i n / e c h o   ' 1 '   >  } n  KN��� 1  LN�C
�C 
strq� o  KL�B�B $0 tempfilelocation tempFileLocation�D  z ��A� l TT�@�?�>�@  �?  �>  �A    ��=� l     �<�;�:�<  �;  �:  �=       �9���9  � �8
�8 .helphdhp****      � ****� �7 
�6�5���4
�7 .helphdhp****      � ****�6 0 	arguments  �5  � �3�2�1�0�/�.�-�,�+�*�)�(�3 0 	arguments  �2 0 prevtids prevTIDs�1  0 splitarguments splitArguments�0 "0 currentlocation currentLocation�/ 0 	booktitle 	bookTitle�.  0 remotelocation remoteLocation�- $0 tempfilelocation tempFileLocation�, "0 newlocationpath newLocationPath�+ &0 newlocationexists newLocationExists�*  0 newlocationurl newLocationURL�) 80 originaltextitemdelimeters originalTextItemDelimeters�( &0 newlocationanchor newLocationAnchor� $�'�& �%�$ Z \ c�#�" w |�!� �� � � ��� � � �� �#4�FPo�~
�' 
ascr
�& 
txdl
�% 
citm
�$ 
cobj
�# 
strq
�" .sysoexecTEXT���     TEXT
�! 
bool
�  afdrcusr
� .earsffdralis        afdr
� 
TEXT
� 
file
� .coredoexbool       obj 
� 
rest
� 
leng
� .GURLGURLnull���    obj �4V��,E�O���,FO��-E�O���,FO��k/E�O��l/E�O��m/E�O�%�%E�O��,%j 	O��
 ���& ��j �&a %�%a %E�Oa a �/j E�O� ̧E�O*�,E�Oa *�,FO��-E�Oa *�,FO�[�\[Zl\Zi2E�O� *�k/a kv*a ,%%E�UO�*�,FO*�,E�Oa *�,FO��-E�Oa *�,FOa �%E�O�*�,FOa �%E�O*�,E�Oa *�,FOl��-a ,  a ��-�l/%E�Y a  E�O�*�,FO��%E�Oa ! �j "UOPY hOPY hOa #��,%j 	OP ascr  ��ޭ