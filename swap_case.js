//Using the JavaScript language, have the function SwapCase(str) take the str parameter 
//and swap the case of each character. For example: if str is "Hello World" the output 
//should be hELLO wORLD. Let numbers and symbols stay the way they are. 

function SwapCase(str){
  
  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  
  for(var i=0; i<str.length ; i++){
    if(UPPER.indexOf(str[i]) !== -1){
      result.push(str[i].toLowerCase());
    }else if(LOWER.indexOf(str[i]) !== -1){
      result.push(str[i].toUpperCase());
    }else {
      result.push(str[i]);
    }
  }
  return result.join('');
}

console.log(SwapCase("Hello World"));