def count_repetition(array):
    result = {}


    for writer in array:
        if writer in result:
            result[writer] += 1
        else:
            result[writer] = 1
    return result



"""

#WIP with nested loops
#method 1
def count_repetition(array):
    result = {}

    for x in range(len(array)):
        for y in range(x + 1, len(array)):
            # print(array[x], array[y]) #--the loop is working
            count=2
            if array[x] == array[y]:
                print(array[x], array[y]) # it is getting the right amount of pairs
                count +=1 # the COUNT is not right...
                print(count)
                result[array[x]]= count

                #print(count)
            else:
                result[array[x]] = 1


    return result


#method 2
def count_repetition(array):
    result = {}

 for x in array:
        for y in array[1::]:
            # print(x, y) #--the loop is working
            count = 1

            if x == y :
                print(x, y)
                
                count += 1 # the COUNT is not right...
                print(count)
                result[x] = count

                #print(count)
            else:
                result[x] = count


    return result

"""

names = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']
print(count_repetition(names))
# {'kerouac': 2, 'fante': 3, 'buk': 2, 'hemingway': 1, 'hornby': 1}
