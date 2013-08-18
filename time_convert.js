//Using the JavaScript language, have the function TimeConvert(num) take the num parameter 
//being passed and return the number of hours and minutes the parameter converts to 
//(ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes
//with a colon.

function TimeConvert(num){

  if(num < 60){
    return '0:'+num;
  }else{
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours+':'+minutes;
  }

} 

