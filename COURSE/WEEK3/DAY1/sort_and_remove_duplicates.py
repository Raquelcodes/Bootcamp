
def intersection(a,b):
    new_string =a + b
    sorted_string=sorted(new_string)
    result=""

    for x in sorted_string:
        if x not in result:
            result +=x
    return result

   #to check if the inputs are only letters (ie no spaces or digits) AND if they are not equal





a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
x = 'abcdefghijklmnopqrstuvwxyz'
print(intersection(a, b))  # abcdefklmopqwxy
print(intersection(a, x))  # abcdefghijklmnopqrstuvwxyz