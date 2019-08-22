function myMap(array, fn) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]))
    }
    return newArray

}


console.log(myMap([1, 2, 3], function multiplyByTwo(arg) {
    return arg * 2
}))