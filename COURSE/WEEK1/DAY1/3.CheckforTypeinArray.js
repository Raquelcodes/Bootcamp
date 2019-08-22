

function areSameType(array){
for (let i=0; i<array.length ; i++){
for (let z=i+1; i<array.length; i++){
    if (typeof array[i] === typeof array[z]){
        return true
        
    }
    
    else { return false}
}

}


}






console.log(areSameType(['hello', 'world', 'long sentence'])) // => true
console.log(areSameType([1, 2, 9, 10])) // => true
console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true