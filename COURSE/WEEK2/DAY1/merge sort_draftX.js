//to implement merge sort algo


function mergeSort(array) {
    let a = array.slice(0, Math.floor(array.length / 2)) // first half of array, EXcluding the midpoint
    let b = array.slice(Math.floor(array.length / 2)) //second half of array, including the midpoint
    let c = []


    function a1(a) {

        //sort array a, using swap
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] < a[i]) {
                    // to swap elements in array 
                    let z = a[j]
                    a[j] = a[i]
                    a[i] = z
                }
            }
        }

        return a
    }

    function b1(b) {

        //sort array b, using swap
        for (let i = 0; i < b.length; i++) {
            for (let j = i + 1; j < b.length; j++) {
                if (b[j] < b[i]) {
                    // to swap elements in array 
                    let z = b[j]
                    b[j] = b[i]
                    b[i] = z
                }

            }

        }

        return b

    }
    //merge the two sorted arrays, a and b, into an output array c that is sorted as it is being formed

    console.log("here", a1(a), b1(b))
    console.log("here", a1(a[0]), b1(b[0]))


    for (let i = 0; i < a.length; i++) {
        console.log(a1(a[i]));

        for (let j = i; j < b.length; j++) {
            if (a1(a[i]) < b1(b[j])) {

                c.push(a1(a[i]))
                //console.log("this", c)
            }

            else if (b1(b[j]) < a1(a[i])) {

                c.push(b1(b[j]))

            }

            else if (a.length === 0) {
                c.push(b1(b[j]))

            }
            else if (b.length === 0) {
                c.push(a1(a[i]))

            }
        }
    }

    console.log("c", c)

    return c


}


console.log(mergeSort([3, 1, 5, 4, 2]))

// 
//while (!a1(a.length) === 0 || !b1(b.length) === 0) {


//     if (a1(a[0]) < b1(b[0])) {
//         c.push(a1(a[0]))


//         console.log("first c", c, a1(a[0]))
//     }

//     else if (b1(b[0]) < a1(a[0])) {
//         c.push(b1(b[0]))

//     }

//     else if (a1(a.length) === 0) {
//         c.push(b1(b[0]))

//     }
//     else if (b1(b.length) === 0) {
//         c.push(a1(a[0]))

//     }
// }
