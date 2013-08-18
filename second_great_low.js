//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of 
//numbers stored in arr and return the second lowest and second greatest numbers, respectively, 
//separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should 
//be 12 98. The array will not be empty and will contain at least 2 numbers. It can get 
//tricky if there's just two numbers! 

function SecondGreatLow(arr){

  arr.sort(function(a,b){return a-b});
  var uniq = [arr[0]];
  var result = [];
  
  for(var i=1; i <arr.length; i++){
    if(arr[i-1] !== arr[i]){
      uniq.push(arr[i]);
    }
  }
  
  result.push(uniq[1],uniq[uniq.length-2]);
  
  return result.join(' ');
  
}

console.log(SecondGreatLow([2,2,2,5,5,5,6]));