
def exp_recursive(base, exp):

    if exp ==0:
        return 1

    else:
        return base*exp_recursive(base, exp-1)

print(exp_recursive(5, 3))  # 125
print(exp_recursive(2, 4))  # 16
print(exp_recursive(5, 1))  # 5
print(exp_recursive(6, 0))  # 1