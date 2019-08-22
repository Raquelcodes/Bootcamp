def fibonacci(args): 
    fib=args-1 + args-2
     
    if args>=0: 
        return fib
    elif args==0: 
        return 0
    elif args==1: 
        return 1
    else:
      	print "not valid input"
        
        #giving me wrong numbers

 
  
print(fibonacci(0))  # 0
print(fibonacci(1))  # 1
print(fibonacci(2))  # 1
print(fibonacci(3))  # 2
print(fibonacci(7))  # 13
print(fibonacci(12)) # 144