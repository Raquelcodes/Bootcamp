def convert(args):
    result=[]
    #convert to an iterable str
    args_iterable=str(args)
    for element in args_iterable:
        #convert each string a=element to integer
       result.append(int(element))


    a = sorted(result)

    b= a[::-1]


    return b





print(convert(429563))  # [9, 6, 5, 4, 3, 2]
print(convert(324))  # [4, 3, 2]