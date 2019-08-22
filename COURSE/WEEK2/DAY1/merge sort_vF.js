//to implement merge sort algo


function mergeSort(array) {
    //to create smaller and smaller arryays until we have just 1 element in the array
    if (array.length <= 1) {
        return array
    }
    let a = array.slice(0, Math.floor(array.length / 2)) // first half of array, EXcluding the midpoint
    let b = array.slice(Math.floor(array.length / 2), array.length) //second half of array, including the midpoint


    //to create smaller and smaller arryays until we have just 1 element in the array
    let left = mergeSort(a)
    let right = mergeSort(b)


    return merge(left, right)


}

//merge the single-element arrays, into an output array c that is sorted as it is being formed

function merge(left, right) {
    //output array
    let c = []

    //indexes of right (j) and left arrays (i)
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            c.push(left[i])
            i++
        } else {
            c.push(right[j])
            j++
        }
    }

    return c.concat(left.slice(i)).concat(right.slice(j))
}


const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]