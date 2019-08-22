array=[1,2,3,4,5,6,7,8,9,10]


squared= map(lambda x: x*x, array)
squared_even=list(filter(lambda x: x%2==0, squared))



print(squared_even)