
def count_of_vowels(args):
    vowelsArray = [x for x in args if x in vowels or x in vowels2] 
    return (len(vowelsArray)) 
  
     
vowels = "aeiou"
vowels2="AEIOU"
print(count_of_vowels("Propulsion Academy"))
