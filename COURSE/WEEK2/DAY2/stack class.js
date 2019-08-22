// Constructor to initialize the stack
const Stack = function (array) {
    this.array = array
}


// Pushes a new element on top of the stack
Stack.prototype.push = function (element) {
    this.array = this.array.concat(element)
    return this.array

}

// Removes the top most element from the stack and returns that element
Stack.prototype.pop = function () {
    return this.array.slice(this.array.length - 1)
}

// Returns the top-most element, but doesn't change the stack
Stack.prototype.top = function () {
    //create a copy with slice
    let a = this.array.slice(this.array.length - 1)
    return a

}

// Returns true if stack has no elements in it, otherwise false
Stack.prototype.isEmpty = function () {
    if (this.array.length === 0) {
        return true
    }
    else { return false }
}

// Removes all elements from the stack
Stack.prototype.clear = function () {
    //can also use this--> this.array = []
    this.array.splice(0, this.array.length)
    return this.array
}


let stack = new Stack([1, 4, 3, 5])


console.log(stack)
//console.log(stack.clear());
//console.log(stack.isEmpty())
console.log(stack.push(6))
console.log(stack)




