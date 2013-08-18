function SimpleAdding(num) { 

  var sum = 0
  
  for(var i=1 ; i < num+1 ; i++){
    sum += i;
  } 
  return sum; 
         
}

console.log(SimpleAdding(2))