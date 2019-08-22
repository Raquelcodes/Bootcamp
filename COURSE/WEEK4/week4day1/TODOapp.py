

from create_new_TODO import *
from delete_TODOS import *
from list_all_TODOS import *
from search_TODOS import *



def TODO_app():

    print("Press \'h\' for help menu")
    print("Press \'a\' to add a new TODO item to the list")
    print("Press \'r\' to remove an item from the list")
    print("Press \'l\' to look up an item on the list")
    print("Press \'q\' to quit")

    while True:
        user_to_do = input("What do you want to do?")

        if user_to_do == "a":
            create_new_todo()

        elif user_to_do == "r":
            delete_TODO()

        elif user_to_do == "s":
            list_all()

        elif user_to_do == "l":
            search()

        elif user_to_do == "h":
            TODO_app()

        elif user_to_do == "q":
            break

    print("goodbye")


print(TODO_app())