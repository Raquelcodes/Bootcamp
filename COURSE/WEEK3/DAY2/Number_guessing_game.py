

import math
import random


user_input=int(input("I am thinking of a number from \'1-10\'. Can you find it? You have 5 tries." ))

def start(user_input):
    number=random.randint(1,11)
    print(number)
    print(user_input)
    count = 1
    while user_input != number :

        if user_input > number:
            count += 1
            user_input=int(input("it's lower than that. try again"))
        elif user_input < number:
            count += 1
            user_input=int(input("it's higher than that. try again"))
        else:
            return count

    print("congrats you guessed it in " + str(count) + " tries.")

    user_input_end=input("Do you want to play again? Y/N" )
    play_again(user_input_end)

def play_again(user_input_end):

    if user_input_end=="Y":
        user_input_new = int(input("I am thinking of a number from \'1-10\'. Can you find it? You have 5 tries."))
        start(user_input_new)
    elif user_input_end=="N":
        print("goodbye!")


print(start(user_input))
