


function myNew(pr, ...args) {

    const newObj = {}
    pr.apply(newObj, args) //didn't use call because call passes "name" and apply passes "this.name"

    Object.setPrototypeOf(newObj, pr.prototype) //set prototype passes the methods of the prototype
    return newObj

}

//apply returns "this.name"
//call returns "name"

function Cat(name, lastName) {
    this.name = name;
    this.lastName = lastName
    this.legs = 4;
}




console.log(myNew, (1, 2, 3))

