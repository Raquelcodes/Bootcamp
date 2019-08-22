




let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']
let obj={}

for (let i =0; i<authors.length; i++){
if( obj[authors[i]]){
    obj[authors[i]]+=1
    }
else obj[authors[i]]=1


}
console.log (obj)