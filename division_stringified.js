//Using the JavaScript language, have the function DivisionStringified(num1,num2) take 
//both parameters being passed, divide num1 by num2, and return the result as a string 
//with properly formatted commas. If an answer is only 3 digits long, return the number 
//with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and 
//num2 is 10000 the output should be "12,346".

function DivisionStringified(num1, num2){
  var num = Math.round(num1/num2)
  var arr = num.toString().split('').reverse();
  var result =[]
  
  for(var i =0; i<arr.length ; i++){
    if ( i%3 === 0 && i !==0){
      result.push(',', arr[i]);
    }else{
      result.push(arr[i]);
    }
    
  } 
  return result.reverse().join('');
  
}

console.log(DivisionStringified(12345678912345, 1));


