
function isCaught(string){
if (string.indexOf("C")+3 >= string.indexOf("m") ){
    return true
}
else return false
}




console.log(isCaught('C.....m')) // => false
console.log(isCaught('C..m')) // => true
console.log(isCaught('..C..m') ) // => true