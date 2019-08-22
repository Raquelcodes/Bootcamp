
//for MERGE SORT it is easier touse recursion, otherwise simon prefers loop

//both lists must be sorted
function mergeSortedLists(list1, list2) {

    let output = []

    let pos1 = 0
    let pos2 = 0

    while (output.length < list1.length + list2.length)

        if (list1[pos1] < list1[pos2] || pos2 >= list.length) {
            //if element is list1 is smaller or if no more elements in list2 -->push list1
            output.push(list1[pos1])
            pos1++
        }
        else if (list1[pos1] >= list2[pos2] || pos2 >= list.length) {
            //if element is list2 is smaller or if no more elements in list1-->push list2
            output.push(list2[pos2])
            pos2++
        }
    return output
}

//function mergeSort gets a list, splits it until it is just one element, and then sends it to function mergeSortedLIsts, which sorts+merges the lists
function mergeSort(list) {
    //if my list is already sorted return it - the end condition for the recursion
    if (list.length === 1) {
        return list
    }

    //get middle and split up input ist in two halves
    let middle = Math.floor(list.length / 2)
    let left = list.slice(0, middle)
    let right = list.slice(middle)

    //sort both halfs individually 
    let leftSorted = mergeSort(left)
    let rightSorted = mergeSort(right)

    //merge the halves afterward
    return mergedSortedLists(leftSorted, rightSorted)

}
