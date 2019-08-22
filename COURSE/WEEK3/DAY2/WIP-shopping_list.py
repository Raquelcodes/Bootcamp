



shopping_list = []
def add_item():
    global shopping_list #to allow for changes to the global variable
    user_add=input("what do you want to add?" )



    user_position = input("what list position do you want to add your item in? input \'a\' if any or a position number")

    if user_position.lower() == "a": #to make it case-insensitive
        shopping_list.append({len(shopping_list)+1 : user_add})
    elif type(int(user_position))== int :
        shopping_list.insert(int(user_position)-1, {int(user_position): user_add})
    # WIP - to update the keys numbers after removal

    #WIP - code not going into the else
    else:
        print("please try again")
        add_item()





    return shopping_list



def remove_item():
    global shopping_list #to allow for changes to the global variable
    user_remove=input("what do you want to remove? Please input the item number. " )
    del shopping_list[int(user_remove)-1]

    # WIP - to update the keys numbers after removal
    """   
    for item in shopping_list:
       for key in item.keys():
          if key > int(user_remove):
             key -= 1
    """


    return shopping_list


def show_items():
    global shopping_list
    print(*shopping_list)



def help_menu():
    print("Press \'h\' for help menu")
    print("Press \'s\' to show the item in your list")
    print("Press \'a\' to add a new item to the list")
    print("Press \'r\' to remove an item from the list")
    print("Press \'q\' to quit")

    while True:
        user_to_do=input("What do you want to do?" )

        if user_to_do == "a":
            add_item()
        elif user_to_do == "r":
            remove_item()
        elif user_to_do == "s":
            show_items()
        elif user_to_do == "h":
            help_menu()
        elif user_to_do == "q":
            break
    print("goodbye")

print(help_menu())