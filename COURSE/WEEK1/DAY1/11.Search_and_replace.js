
const myReplace = (string, a, b)=>{

    if (a.charAt(0)===a.charAt(0).toUpperCase()){
    return   string.replace(a, b.replace(b.charAt(0), b.charAt(0).toUpperCase()));
}
else   return string.replace(a, b);
 
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"

