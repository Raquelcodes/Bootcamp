def nt_dictionary(num):
    import random
    dictionary={}


    for key in range(num):   #bc exercise states that the number of keys is equal to the input num
        while True:
            new_key = random.randint(1, 1000)  # setting the key
            if new_key in dictionary.keys(): #check this logic
                continue #check this logic
            break #check this logic
        dictionary[new_key]= new_key**2 #setting the value


    return dictionary






print(nt_dictionary(20))
print('Length', len(nt_dictionary(20)))