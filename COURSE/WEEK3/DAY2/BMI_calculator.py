

print("Let’s calculate your BMI (kg/m2)")

user_w_input= input("what is your weight(in Kg)? ")

user_h_input=input("what is your height(in cm)?")

def user_BMI(user_w_input,user_h_input ):
    user_weight = float(user_w_input)
    user_height = int(user_h_input)*0.001  #to go from cm to m
    BMI=user_weight/user_height*user_height
    output = " you are "
    if BMI<18.5:
        output = "underweight"
    elif BMI>18.5 and BMI<24.9 :
        output += "average"
    elif BMI > 25 and BMI < 29.9:
        output +="overweight"
    elif BMI > 30 and BMI < 34.9:
        output += "obese"
    elif BMI > 35:
        output += "extremely obese"

    return output

print(user_BMI (user_w_input,user_h_input))


