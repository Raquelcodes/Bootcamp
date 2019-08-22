def split_the_bill(arg):
    sum=0
    result={}
    for value in arg.values(): #iterate through values
        sum+=value

    average = sum/len(arg)
    print(average)


    #itarate through whole object and replace the values of the keys:
    for key, value in arg.items():
        result[key] =value- average

    return result











group = {
        'Amy': 20,
        'Bill': 15,
        'Chris': 10
    }
print(split_the_bill(group))  # { 'Amy': -5, 'Bill': 0, 'Chris': 5 }
