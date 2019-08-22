
def zero_sum(array):
    result=[]

    for x in array:
        for y in array[1::]:
            #print(array[x],array[y])
            if x== -y :

                output=[array.index(x),array.index(y)]
                reverse_output= output[::-1]
                #bc of NOTE below ahd to create an interim array and see if those modules existed already in the nested module results object

                if output not in result and reverse_output not in result:
                        result.append(output)
                #result.append([array.index(x),array.index(y)])

    return result



print(zero_sum([1, 5, 0, -5, 3, -1]))  # [[0, 5], [1, 3], [2, 2]]
print(zero_sum([1, -1]))               # [[0, 1]]
print(zero_sum([0, 4, 3, 5]))          # [[0, 0]]

"""
#NOTE: in a nested array, or nested tutle, not in only recognized exact modules and does not see numbers inside nested modules
#tests to demonstrate the above 
def test(array):
    if (array) not in [[2, 3], (5, 6), 9, 1]:
        return False
    else:
        return True
print (test([2,3]))
print (test([3,2]))
print (test(2))
print (test(9))
"""
