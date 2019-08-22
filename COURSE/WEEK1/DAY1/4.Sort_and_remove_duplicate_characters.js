function longest(a, b) {
    let newString = a + b

    

    let newArray = []

    for (let i = 0; i < newString.length; i++) {
            if (!newArray.includes(newString[i])) {
                newArray.push(newString[i])
            }


        }
return newArray.sort().join("")
}


console.log(longest('abcccaa', 'acddddffzzz')) // => 'abcdfz'

/*
a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
console.log(longest(a, b))// => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
console.log(longest(a, a)) // => 'abcdefghijklmnopqrstuvwxyz'
*/