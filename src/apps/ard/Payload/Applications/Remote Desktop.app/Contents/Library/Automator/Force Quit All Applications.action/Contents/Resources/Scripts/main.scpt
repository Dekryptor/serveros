FasdUAS 1.101.10   ����  ��  ��       ��    ��    ������
�� .aevtoappnull  �   � ****�� 0 localized_string  �� 60 asdscriptuniqueidentifier ASDScriptUniqueIdentifier  ��������  ��
�� .aevtoappnull  �   � ****��  �� �� 	��  	  ������ 0 these_computers  �� 0 
parameters  ��    ������ 0 these_computers  �� 0 
parameters    ���� 
���� �� ��   �� ������������������������
�� 
pcls
�� 
list 
 �    T A S K _ N A M E�� 0 localized_string  �� 0 	task_name    �  \ o s a s c r i p t   - e   ' t e l l   a p p l i c a t i o n   " S y s t e m   E v e n t s " 
 	 s e t   t h e s e _ a p p s   t o   n a m e   o f   e v e r y   p r o c e s s   w h o s e   b a c k g r o u n d   o n l y   i s   f a l s e   a n d   f i l e   t y p e   i s   n o t   " F N D R " 
 	 i f   t h e s e _ a p p s   i s   { }   t h e n   r e t u r n   
 e n d   t e l l 
 s e t   a Q u o t e   t o   " \ " " 
 s e t   t h e   a p p _ l i s t   t o   " " 
 s e t   t h e   i t e m _ c o u n t   t o   t h e   c o u n t   o f   t h e s e _ a p p s 
 r e p e a t   w i t h   i   f r o m   1   t o   t h e   i t e m _ c o u n t 
 	 s e t   t h i s _ i t e m   t o   i t e m   i   o f   t h e s e _ a p p s 
 	 i f   i   i s   1   t h e n 
 	 	 s e t   t h e   a p p _ l i s t   t o   a Q u o t e   &   t h i s _ i t e m   &   a Q u o t e 
 	 e l s e 
 	 	 s e t   t h e   a p p _ l i s t   t o   t h e   a p p _ l i s t   &   s p a c e   &   a Q u o t e   &   t h i s _ i t e m   &   a Q u o t e 
 	 e n d   i f 
 e n d   r e p e a t 
 d o   s h e l l   s c r i p t   " k i l l a l l   "   &   a p p _ l i s t '�� &0 tiger_unix_script Tiger_UNIX_script  �  � o s a s c r i p t   - e   ' t e l l   a p p l i c a t i o n   " S y s t e m   E v e n t s " 
 	 s e t   v i s i b l e   o f   e v e r y   p r o c e s s   t o   t r u e 
 	 s e t   t h e s e _ a p p s   t o   n a m e   o f   e v e r y   p r o c e s s   w h o s e   v i s i b l e   i s   t r u e   a n d   f i l e   t y p e   i s   n o t   " F N D R " 
 	 i f   t h e s e _ a p p s   i s   { }   t h e n   r e t u r n   
 e n d   t e l l 
 s e t   a Q u o t e   t o   " \ " " 
 s e t   t h e   a p p _ l i s t   t o   " " 
 s e t   t h e   i t e m _ c o u n t   t o   t h e   c o u n t   o f   t h e s e _ a p p s 
 r e p e a t   w i t h   i   f r o m   1   t o   t h e   i t e m _ c o u n t 
 	 s e t   t h i s _ i t e m   t o   i t e m   i   o f   t h e s e _ a p p s 
 	 i f   i   i s   1   t h e n 
 	 	 s e t   t h e   a p p _ l i s t   t o   a Q u o t e   &   t h i s _ i t e m   &   a Q u o t e 
 	 e l s e 
 	 	 s e t   t h e   a p p _ l i s t   t o   t h e   a p p _ l i s t   &   s p a c e   &   a Q u o t e   &   t h i s _ i t e m   &   a Q u o t e 
 	 e n d   i f 
 e n d   r e p e a t 
 d o   s h e l l   s c r i p t   " k i l l a l l   "   &   a p p _ l i s t '�� *0 panther_unix_script Panther_UNIX_script  �   2 c a s e   " ` u n a m e   - r ` "   i n 
 7 * )    �      ; ; 
 * )    �      ; ; 
 e s a c�� 0 unix_script UNIX_script �                                                                                  mcp   alis    x  14D116                     �07H+   sSRemote Desktop.app                                              ���;1�        ����  	                Applications    �0�q      �;�l     sS sR  414D116:MacAppStore: Applications: Remote Desktop.app  &  R e m o t e   D e s k t o p . a p p    1 4 D 1 1 6  +MacAppStore/Applications/Remote Desktop.app   / ��  
�� 
kocl
�� 
ucmt
�� 
prdt
�� 
pnam
�� 
shot
�� 
scpt�� �� 
�� .corecrel****      � null�� 0 	this_task  
�� 
on  
�� .mcp extkreco       task�� d��,� 
��&E�Y hO)�k+ E�O�E�O�E�O��%�%�%�%E�O� .*��a a �a fa �a a  E` O_ a �l UO�  ��������  ���� 0 localized_string  ��  �� �� ��    ���� 0 
key_string  ��    ���� 0 
key_string    �� ��
�� 
iBWI  �   t c o m . a p p l e . R e m o t e D e s k t o p . a u t o m a t o r . F o r c e Q u i t A l l A p p l i c a t i o n s
�� .appSlocSutxt       obj �� 	���l   �     m a i n . a p p l e s c r i p tascr  ��ޭ