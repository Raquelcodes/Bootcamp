def is_only_string(string):
    if type(string) == str:  #isinstance(string, str):
        for element in string:
            if element == " " or element.isdigit():
                return False

        return True

    else:
        return False


print(is_only_string('11'))                       # False
print(is_only_string('hello')) #True
print(is_only_string(['hello']))                  # ? Please handle this case!! Should return False
print(is_only_string('this is a long sentence'))  # False
print(is_only_string({'a': 2}))                   # ? Please handle this case!! Should return False