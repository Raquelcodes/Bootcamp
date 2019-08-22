



#TO DO the manual way











#the package inflect can do this
def write_number(num):
    import inflect
    p = inflect.engine()
    result = p.write_number()
    return result





write_number(11)  # "eleven"
write_number(2)   # "two"
write_number(32)  # "thirty-two"