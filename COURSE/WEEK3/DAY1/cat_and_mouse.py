def is_caught(arg):
        if arg.index("C") >= arg.index("m")-3:
            return True
        else:
            return False



print(is_caught('C.....m'))   # False
print(is_caught('C..m'))      # True
print(is_caught('..C..m'))    # True
print(is_caught('...C...m'))  # False
print(is_caught('C.m'))       # True