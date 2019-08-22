// Constructor to initialize the queue
//considering queue front =end of array, and queue back = beginning of array
//here using array but with big amounts of data, better to use linked lists, since arrays are O(n) to push and pop; would have to be a bidrectionally linked list, since we are pushing and poping.
const Queue = function (array) {
    this.array = array
}

// Adds element at the end of the queue
Queue.prototype.enqueue = function (element) {
    this.array.unshift(element)
    return this.array

}

// Removes element from the front, and returns that element
Queue.prototype.dequeue = function () {
    return this.array.slice(this.array.length - 1)
}

// Returns front-most element from queue, but doesn't remove it
Queue.prototype.first = function () {
    return this.array[this.array.length - 1]
}

// Return true if queue has no elements in it, otherwise false
Queue.prototype.isEmpty = function () {
    if (this.array.length === 0) {
        return true
    }
    else { return false }
}

// Remove all elements from queue
Queue.prototype.clear = function () {
    this.array = []
    return this.array
}
let queue = new Queue([1, 4, 3, 5])

//console.log(queue.clear())
//console.log(queue.isEmpty())
console.log(queue.enqueue(6))
console.log(queue.dequeue())
console.log(queue.first())
