



function myEach(array, fn) {

    for (let i = 0; i < array.length; i++) {
        (fn(array[i]))
    }

}



console.log(myEach([1, 2, 3], function multiplyByTwo(arg) {
    return arg * 2
}))