function Player(){
  this.tracks={} //exercise did not specify to add but i did, to contain the tracks
  
  // what i would do is an array of tracks (this.tracks=[]) and a position (this.position=0)
  // this way when you do play you can just do this.tracks[this.position]
}

var player= new Player()


Player.prototype.add=function(song){
  this.tracks[song]=0
  console.log(this.tracks) 
}


Player.prototype.play=function(){
  console.log(this.tracks)}

//prev and next only seems to work for shifts until the endes of array- the jump to last if previous is index0, and back to first if next is index(last song) outputs "undefined"

var i=0

Player.prototype.next=function(){
var array = Object.keys(this.tracks)
  if (0<i<array.length ) { i++} //if within array length, add 1 index location
  else if (i=array.length) 
  { i=0 } //if it is the last song, then return the first song 
  
   console.log(array[i]) 
}


Player.prototype.previous=function(){
 var array = Object.keys(this.tracks)

   if (i<=array.length) { i--} 
   else if (i === 0) { 
        i = array.length } //if it is the first song, "previous" should tkae it to the last song in the list; 
    console.log(array[i]); 
  }



 
player.add('drive');
player.add('LaBamba');
player.add('Fire');
player.play()
player.next()//output labamba
player.next()//output fire (ie last song)
player.next()//! output undefined
player.previous()//output Fire
player.previous()//output labamba
player.previous()//ouput drive
player.previous()//! output undefined 
player.next()//output drive