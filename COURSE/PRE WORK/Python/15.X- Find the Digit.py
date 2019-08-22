import functools

def find(number, count=0):
      
    def multiply(n):
           return functools.reduce(lambda a,b:  a*b, n)
       
    
    while (len(str(number)) > 1):
           num= str(number).split()
           numMulti = multiply(num)
       		return count + 1
       
    return count
    
#keep getting indentation errors.....dont know why.

print(find(57)) # 3
print(find(5923)) # 2
print(find(90)) # 1
print(find(7)) # 0
print(find(999)) # 4