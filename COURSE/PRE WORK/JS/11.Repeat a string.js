function repeat_string_num_times(str, num) {
    var fullStr=""
    while (num>0){
    fullStr+=str
    num--
  }
    return fullStr
}

repeat_string_num_times("abc", 3) // 'abcabcabc'
repeat_string_num_times("abc", 1) // 'abc'
repeat_string_num_times("abc", 0) // ''
repeat_string_num_times("abc", -1) // ''