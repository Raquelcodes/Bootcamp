function count_vowels(string) {
    var vowels="aeiouAEIOU"
    var vowelSplit= vowels.split("")
    var stringSplit= string.split("")
    var countVowels=0
    
    for (var i=0; i<stringSplit.length; i++) {
      if (vowelSplit.indexOf(string[i]) !== -1) {
      countVowels++}
    else { return countVowels}}
    return countVowels
}

count_vowels("alphabet") // 3
count_vowels("Propulsion Academy") // 7
count_vowels("AaaAa") // 5
count_vowels("fly") // 0
