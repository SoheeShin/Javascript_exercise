//Using the JavaScript language, have the function NumberSearch(str) take the str parameter, 
//search for all the numbers in the string, add them together, then return that final number. 
//For example: if str is "88Hello 3World!" the output should be 91. You will have to 
//differentiate between single digit numbers and multiple digit numbers like in the example 
//above. So "55Hello" and "5Hello 5" should return two different answers. Each string will 
//contain at least one letter or symbol. 

function NumberSearch(str){

  var NUM = "1234567890";
  var numbers = [];
  var result = [];
    
  for(var i =0; i <str.length; i++){
    if (NUM.indexOf(str[i]) !== -1){
      numbers.push(str[i]);
    }else{
      if ((i !==0) && (NUM.indexOf(str[i-1]) !== -1)){
        result.push(parseInt(numbers.join('')));
        numbers = [];
      }
    }
  }
  console.log(result);
  console.log(numbers);
  if (numbers != []){
    result.push(parseInt(numbers.join('')));
  }
  console.log(result);

  var sum = 0;
  for(var j=0; j<result.length; j++){
    sum += result[j];
  }
  
  return sum;
  
}

console.log(NumberSearch("T1wo Ho33uses3a and 1983 is the 1 2 3 a0 00 0 a"));
