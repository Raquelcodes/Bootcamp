function two_sum(nums) {
    var index=[]
  
  for (var i=0;i<nums.length; i++) { 
  for (var j= i+1;j<nums.length; j++) {    
    if ( nums[i] + nums[j] === 0)  { index.push( nums.indexOf(nums[i]), nums.indexOf(nums[j])) }
   
    else null 
  }
  
}
  return index
}

console.log(two_sum([1, 3, -1, 5])) // [[0, 2]]
two_sum([1, 3, -1, 5, -3]) // [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]) // null
