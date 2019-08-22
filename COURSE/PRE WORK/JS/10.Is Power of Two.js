function is_power_of_two(num) {
    return Math.log2(num) % 1 === 0;
    //tried to do it with for and while loops (n++ in loop, while num%Math.pow(2,n)===0 OR until num===Math.pow(2,n). However could not figure out how to make the "n" loop until +infinity in the for nor how to make the while loop work. So, looked for a new built-in function I could use.
      
}

is_power_of_two(8) // true
is_power_of_two(16) // true
is_power_of_two(32) // true
is_power_of_two(12) // false
is_power_of_two(24) // false