def unique_array(args):
    #result=set(args) 
    #return result 
        #this works but list goes out of original order
		
    
    		
    		unique = []

    		for i in args:
        		for y in args:
            			if args[i] != args[y]: 
   		 				 		unique.append(i)
			return unique # output: list elemnts out of range..


print(unique_array([0, 3, -2, 4, 3, 2]))   # [0, 3, -2, 4, 2]
print(unique_array([10, 22, 10, 20, 11, 22]))  #[10, 22, 20, 11]
