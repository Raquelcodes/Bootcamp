
const confirmEnding=(string,a)=>{
if (string.includes(a) && string[string.indexOf(string.length-1)]=== a[a.indexOf(a.length-1)])
{
    return true
}
else return false
}




console.log(confirmEnding("Open sesame", "same")); // true