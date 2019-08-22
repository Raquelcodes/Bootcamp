


const translatePigLatin =(string) =>{
let vowels="aAeEiIoOuU"
let vowelsArray= vowels.split("")
let way="way".split('')
let ay= "ay".split("")
let stringSplit= string.split("")

if (vowelsArray.includes(string[0])===true ){
    stringSplit.concat(way)
    
    console.log(stringSplit.concat(way).join(" "));
    
  
    
}


     else if (!vowelsArray.includes(stringSplit[0]) && !vowelsArray.includes(stringSplit[1])){
        let interim=stringSplit.slice(0,2)
        let interimAll=interim.concat(ay)
        let newString = stringSplit.slice(2,stringSplit.length).concat(interimAll)
        return newString.join(" ")

      }
else 
{let interim=stringSplit.slice(0,1)       
let interimAll=interim.concat(ay)
let newString = stringSplit.slice(1,stringSplit.length).concat(interimAll)
return newString.join(" ")}
 
}



console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("pig")); // igpay
