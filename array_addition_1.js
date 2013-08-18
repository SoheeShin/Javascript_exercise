//Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of 
//numbers stored in arr and return the string true if any combination of numbers in the 
//array can be added up to equal the largest number in the array, otherwise return the 
//string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return 
//true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the 
//same elements, and may contain negative numbers.

function ArrayAdditionI(arr){

  arr.sort(function(a,b){return a-b});
  var max = arr.pop();
  
  for (var j = 1; j < arr.length; j++){
    var new_arr = arr.slice(j).concat(arr.slice(0,j));
    var sum =0;
    for (var i = 0; i < new_arr.length; i++){
        sum += new_arr[i];
        if (sum == max){
            return true;
            }
        }
    }
    return false;    
}

console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
console.log(ArrayAdditionI([10,12,50, -1, 29, -3]));