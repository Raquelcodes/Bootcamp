def is_array_or_tuple(arg):
    if isinstance(arg,list) or isinstance(arg, tuple):
        return True
    else:
        return False


print(is_array_or_tuple('hello'))      # False
print(is_array_or_tuple(['hello']))    # True
print(is_array_or_tuple([2, {}, 10]))  # True
print(is_array_or_tuple({'a': 2}))     # False
print(is_array_or_tuple((1, 2)))       # True
print(is_array_or_tuple(set()))        # False