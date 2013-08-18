//Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter
//being passed and determine if it is an acceptable sequence by either returning the string
//true or false. The str parameter will be composed of + and = symbols with several letters 
//between them (ie. ++d+===+c++==a) and for the string to be true each letter must be 
//surrounded by a + symbol. So the string to the left would be false. The string will not 
//be empty and will have at least one letter.

function SimpleSymbols(str) {

  var result = true;
  
  for(var i = 0 ; i < str.length ; i++){
    
    if(/[a-zA-Z]/.test(str[i])){
      if(i === 0 || i === str.length-1){ 
        result = false;
      }else if(str[i-1] !== '+' || str[i+1] !== '+'){
        result = false;
      }
    } 
  }
  return result;
}
  
 
console.log(SimpleSymbols("+d+=3=+s+"))
console.log(SimpleSymbols("f++d+"))
 
console.log(SimpleSymbols("+d===+a+"))
console.log(SimpleSymbols("+a="))
console.log(SimpleSymbols("2+a+a+"))