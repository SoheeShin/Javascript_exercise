//Using the JavaScript language, have the function DashInsert(num) insert dashes ('-') 
//between each two odd numbers in num. For example: if num is 454793 the output should be 
//4547-9-3. Don't count zero as an odd number. 

function DashInsert(num){

  var str = num.toString();
  var result = [str[0]];
  
  for(var i=1; i<str.length; i++){
    if((str[i-1]%2 === 1)&&(str[i]%2 === 1)){
      result.push('-', str[i]);
    }else{
      result.push(str[i]);
    }
  }
  
  return result.join('');
}

console.log(DashInsert(454793));