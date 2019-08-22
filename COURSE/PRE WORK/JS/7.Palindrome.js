function palindrome(string) {
    if (string.split("").join("")===string.split("").reverse().join("") ) {return true}
    else {return false}
}

palindrome("ABBA") // true
palindrome("AbbA") // true
palindrome("abcd") // false
