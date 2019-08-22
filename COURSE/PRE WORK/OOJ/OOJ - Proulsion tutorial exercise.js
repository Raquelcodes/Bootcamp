

function Animal(type, name, sound) {
  this.animalType = type;
  this.name = name;
  this.sound = sound;
  this.isAlive = true;
  this.friends = [];
}

Animal.prototype
// this is the property where we are going to attach the methods

Animal.prototype.talk = function() {
  console.log('I am so tired of talking about animals');
}

var cat= new Animal()
cat.talk()

cat.friends= "dog"


Animal.prototype.numFriends=function(){
  console.log (this.friends.split(" ").length)
}
cat.numFriends()

Animal.prototype.getFriend= function() { console.log(this.friends)}
// something is worng with this function- and I do not knwo why... creates error "getFriend not a function", and thus "cat.getFriend" is "undefined"..

Animal.getFriend()

cat.getFriend()



