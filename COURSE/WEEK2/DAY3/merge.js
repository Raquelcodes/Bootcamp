

function merge(...obj) {
    let newObj = {}
    for (let x of obj) { // iterates through all objects inputted as arguments as an array
        //console.log(x)
        for (let key in x) { // iterates through each object in the array
            if (!(newObj[key])) {
                newObj[key] = x[key]
                //console.log(key)
                //console.log(x[key])
            }
        }
    }
    return newObj
}






console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })) // { a: 3, b: 2, c: 4 }
//console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5 }))