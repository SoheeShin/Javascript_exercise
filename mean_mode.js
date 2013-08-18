//Using the JavaScript language, have the function MeanMode(arr) take the array of numbers 
//stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other 
//(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array 
//will not be empty, will only contain positive integers, and will not contain more than one mode. 

function MeanMode(arr){
  arr.sort(function(a,b){return a-b});
  var sum = 0;
  
  for(i=0; i <arr.length; i++){
    sum += arr[i];
  }
  var mean = sum / arr.length
  
   
  var count = 1;
  var mode = 0;
  var maxcount = 0;
  
  
  for(i=0; i<arr.length-1; i++){
    
    if (arr[i]===arr[i+1]){
      count += 1;
    }else{
      if (count > maxcount){
        maxcount = count;
        count = 1;
        mode = arr[i];
      }
    }
  }
 
  if(mean===mode){
    return 1;
  }else{
    return 0;
  }
  
  
  
}

console.log(MeanMode([5,3,3,3,1]));