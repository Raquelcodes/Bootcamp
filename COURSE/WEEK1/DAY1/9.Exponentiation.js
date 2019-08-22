
function exp(b,n){
// direct method: return Math.pow(b,n) 
// recursion method:
if (n===0){ return 1}
else return b*exp(b,n-1) //calling itself n-1 times, bc it already had one loop when reching this line for the first time
} 





console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1