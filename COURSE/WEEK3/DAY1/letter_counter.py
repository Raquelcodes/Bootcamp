
def letter_counter(string):
    count_upper=0
    count_lower=0
    for x in string:
        if x.isupper():
            count_upper+=1
        elif x.islower():
            count_lower+=1


    print ("UPPER CASE" + str(count_upper) + "/ LOWER CASE" + str(count_lower))


letter_counter("Hello World!")

# Hello World!
# UPPER CASE 2
# LOWER CASE 8

