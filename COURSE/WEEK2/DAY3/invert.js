function invert(obj) {

    newObj = {}

    for (let key in obj) {
        let a = obj[key] // this will assign object value of given key of obj to "a"
        newObj[a] = key // this will say that the value of given key of obj is actually equal to key in newObj
    }
    return newObj

}


console.log(invert({ a: 3, b: 2 })) // { 2: 'b', 3: 'a' }