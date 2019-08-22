#Write a function find_numbers(min, max) that will find all numbers that are a multiple of 7 but not a multiple of 5.


def find_numbers(min,max):
    result=[]
    for x in range(min,max):
        if x%7==0 and x%5!=0:
            result.append(x)
    return result

print(find_numbers(2,100))



#second way to do it just with filter and lambda

def find_numbers2(min,max):
    return list(filter(lambda x: (x%7==0 and x %5!=0), range(min,max)))


print(find_numbers2(2,100))