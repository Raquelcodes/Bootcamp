
function myFilter(array, fn) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            newArray.push((array[i]))
        }
    }
    return newArray
}



console.log(myFilter([1, 2, 3], function biggerThanOne(arg) {
    if (arg > 1) {
        return true
    }

}))