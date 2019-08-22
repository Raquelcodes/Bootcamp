

function Player() {
  this.tracks = []
     
  this.current = 0
}

   function Track(artist, title, album){
     
     this.artist= artist
      this.title=title
      this.album= album
   
   }

Player.prototype.add = function (object) {
  this.tracks.push(object) 
  console.log(this.tracks)
}


Player.prototype.play = function () {
  console.log("Playing " + this.tracks[this.current].title + " by " + this.tracks[this.current].artist )
}



Player.prototype.next = function () {
  if (this.current === this.tracks.length-1) {
    this.current=0
  }
  else this.current+= 1;
}

Player.prototype.previous = function () {
  if (this.current === 0) {
    this.current=this.tracks.length-1
  }
  else this.current-= 1;
}


var player = new Player()



 var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
  var laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba'); 

player.add(driveTrack);
player.play() 
player.add(laBambaTrack)
player.play()
player.next()
player.play()
player.next()
player.play()
player.previous()
player.play()

