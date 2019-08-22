function isAnagram(test, original) {
    var testSplit= test.toLowerCase().split("").sort().join()
    var originalSplit= original.toLowerCase().split("").sort().join()
    if (testSplit===originalSplit) {return true}
      else {return false}
};

isAnagram("foefet", "toffee") // true
isAnagram("Buckethead", "DeathCubeK") // true
isAnagram("Twoo", "WooT") // true
isAnagram("dumble", "bumble") // false
isAnagram("ound", "round") // false
isAnagram("apple", "pale") // false


