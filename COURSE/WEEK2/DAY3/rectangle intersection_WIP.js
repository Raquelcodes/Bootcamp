function intersect(array1, array2) {

    intersectRect = []

    if (Math.max.apply(null, array1[0]) > Math.max.apply(null, array2[0])) {
        intersectRect.push(array1[0])
        console.log(Math.max.apply(null, array1[0]))
        console.log(intersectRect)

    }
    else if (Math.max(array2[0]) > Math.max(array1[0])) {
        intersectRect.push(array2[0])
    }

    else if (Math.max(array1[1]) < Math.max(array2[1])) {
        intersectRect.push(array1[1])
    }

    else if (Math.max(array2[1]) < Math.max(array1[1])) {
        intersectRect.push(array2[1])
    }
    return intersectRect
}


console.log(intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]])) // => [2, 2], [4, 3]
//console.log(intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]])) // => [2, 1], [4, 4]