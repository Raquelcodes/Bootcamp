//sort a list of numbers


function selectionSort(array) {



    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                // to swap elements in array --need to declare a variable in between to connect them
                let a = array[j]
                array[j] = array[i]
                array[i] = a
            }
        }
    }
    return array

}

console.log(selectionSort([2, 6, 4, 7]))