// Constructor to initialize the set - a set is a data structure containing objects, similar to an array. But each element can only appear once.
const Set = function (set) {
    this.set = set
}

// inserts an element
Set.prototype.insert = function (element) {
    this.set = this.set.concat(element)
    return this.set

}

// removes an element
Set.prototype.remove = function (element) {
    this.set.splice(element, 1)
    return this.set
}

// checks if an element exists in the set
Set.prototype.has = function (element) {
    for (let i = 0; i < this.set.length; i++) {
        if (this.set[i] = element) {
            return true
        } else { false }
    }
}

// returns array of all entries
Set.prototype.all = function () {
    return Array.from(this.set)
}

// returns the number of all entries
Set.prototype.length = function () {
    let a = Array.from(this.set)
    return a.length
}

let set = new Set([{ key: 1 }, { greeting: "hello" }, { address: "zurich" }])

console.log(set.insert({ week: 2 }))
console.log(set.remove([0].key))
console.log(set.has("hello"))
console.log(set.all())
console.log(set.length())



