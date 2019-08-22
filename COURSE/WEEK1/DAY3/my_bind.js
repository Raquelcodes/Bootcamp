const obj = {
    name: 'Markov'
}
function printName() {
    console.log('Thy name is: ' + this.name);
}
printName();

function myBind(a, b) {
    return function () {
        a.call(b)
    }
}
const boundPrint = myBind(printName, obj);


boundPrint();