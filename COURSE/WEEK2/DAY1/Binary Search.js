
//locating the index of q in array


function binarySearch(q, array) {
    let a = array
    //index of min
    let min = 0
    //index of max
    let max = a.length - 1


    let mid = 0

    while (min <= max) {

        mid = Math.floor((max + min) / 2) //to get the center of array    
        //console.log("mid" + mid + "max" + max + "min" + min)


        if (q === a[mid]) {
            return mid
        }
        //if q > than number in middle, then search starting in the number after mid (ie min= mid+1)

        else if (q > a[mid]) {
            min = mid + 1

        }

        //if q < than number in middle, then search ending in the number right before mid (ie max= mid-1)
        else {
            max = mid - 1
        }



    }
    return -1
}

console.log(binarySearch(4, [1, 2, 3, 4]))