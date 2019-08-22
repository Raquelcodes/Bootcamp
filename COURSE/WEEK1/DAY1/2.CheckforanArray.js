

function isArray(array){
    if (typeof array === typeof [] && Number.isInteger(array.length) ){
        console.log (true)
    }
    else {console.log (false)}
    
    }
    // simpler way below w different method:
/*
    function isArray(array){
        if (Array.isArray(array) === true) ){
            console.log(true)
        }
        else {console.log (false)}
*/

isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false



