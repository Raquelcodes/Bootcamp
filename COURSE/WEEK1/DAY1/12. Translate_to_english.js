
//String.fromCharCode()
//String.prototype.charCodeAt()

const toEnglish= (string)=>{
let binArray=string.split (" ")

let outputString=""
for (var i=0; i<binArray.length; i++){
    outputString+=String.fromCharCode(parseInt(binArray[i],2)).toString()
}// trnasform into UTF-16 code units (String.fromCharCode), the integer of base 2 from the array of binary (parseInt)
return outputString
}

console.log(
    toEnglish(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
    ); // Aren't bonfires fun!?