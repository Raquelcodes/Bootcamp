function add_all(arr) {
    var max=Math.max(arr[0], arr[1]) //bc the highest number can also be in index 0, want to make sure it is pulling always the max among index 0 and 1
    var min=Math.min(arr[0], arr[1])// same as above comment, but for min
    var full =[]
  
    for (var i=min; i<=max; i++) 
      {full.push(i)}
    
  return full.reduce(function(a,b){return a+b})
  
}

add_all([1, 4]) // 10
add_all([5, 10]) // 45
add_all([9, 10]) // 19
add_all([0, 0]) // 0
add_all([-1, 1]) // 0