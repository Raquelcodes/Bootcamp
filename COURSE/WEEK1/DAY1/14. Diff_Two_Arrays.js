


const diffArray = (a,b)=>{
    let c=a.concat(b)
let newArray=[]

for (let i=0; i<c.length; i++){
    if (!b.includes(c[i]) || !a.includes(c[i])){
            newArray.push(c[i])
            }
        }
        return newArray

}



console.log(diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )) // [ 'pink wool', 'diorite' ]