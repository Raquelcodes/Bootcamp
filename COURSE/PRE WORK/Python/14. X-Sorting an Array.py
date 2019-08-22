  
import math
from math import floor

def sort_it(theArray):
    arrayEven=[]
    arrayOdd=[]
    
    
    for x in theArray:
      	if x%2==0:
          	math.floor(x)
            	arrayEven.append(x)
            	
        else:
          math.floor(x)
          arrayOdd.append(x)
          
	
  	arrayEven.sort()
  	arrayOdd.sort(reverse=True)
  	newArray= arrayOdd + arrayEven
	return newArray

print(sort_it([1, 2, 3, 4, 5, 6, 7, 8, 9])) #returns only [1]....
