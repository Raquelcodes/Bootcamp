function nearby_az(string) {
    var z= "z"
    var a="a"
    var strSplit=string.split("")
    
    for (var i = 0; i<strSplit.length; i++){
      if ( strSplit.indexOf(z) !== -1 && strSplit.indexOf(z)  <= (strSplit.indexOf(a)) +3 ) {return true}
      else { return false}}
      
}

nearby_az("abbbz") // false
nearby_az("abz") // true
nearby_az("abcz") // true
nearby_az("abba") // false
