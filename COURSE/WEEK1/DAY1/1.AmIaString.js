function isString(string){
if (typeof string === typeof "blubber"){
    console.log (true)
}
else {console.log (false)}

}





isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false