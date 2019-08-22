function largest_of_four(arr) {
    return arr.map(function(arr){return Math.max.apply(Math, arr)}) 
    // ".apply" because Math.max does not take arrays; apply is used with objects, so it has to be "apply(object,arguments in array)
}

largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // [27,5,39,1001]
