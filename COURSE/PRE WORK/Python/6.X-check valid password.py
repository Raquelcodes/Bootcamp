def is_valid_password():
	password=raw_input("enter password:") 	
special ="@#!$%^&*()_-+=" 

for letter in password:
	if len(password)< 10:
       	 print "A password must have at least ten characters."
	elif letter in special:
        	print "A password consists of only letters and digits."
	elif letter ==letter.lower():
       		print "A password must contain at least a capital letter in it."
	else:
 				 	print "pass is valid"

is_valid_password()
 #output: password is not defined - why?