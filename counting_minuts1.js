//Using the JavaScript language, have the function CountingMinutesI(str) take the str 
//parameter being passed which will be two times (each properly formatted with a colon and 
//am or pm) separated by a hyphen and return the total number of minutes between the two 
//times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am 
//then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

function CountingMinutesI(str){

  var times = str.split('-');
  var time1_ampm = times[0].slice(times[0].length-2);
  var time1_hour = parseInt(times[0].split(':')[0]);
  var time1_min = parseInt(times[0].split(':')[1]);
  
  var time2_ampm = times[1].slice(times[1].length-2);
  var time2_hour = parseInt(times[1].split(':')[0]);
  var time2_min = parseInt(times[1].split(':')[1]);

  if(time1_ampm === 'pm'){
    time1_hour += 12;
  }  
  if(time2_ampm === 'pm'){
    time2_hour += 12;
  }
  
  var new_hour = time2_hour - time1_hour;
  if(new_hour < 0 ){
    new_hour += 24;
  }
  
  var new_min = time2_min - time1_min;
  
  
  var result = new_hour *60 + new_min;
  if (result<0){
    result +=1440;
  }
  
  return result;
  
}

console.log(CountingMinutesI("1:23am-1:08am"));
console.log(CountingMinutesI("2:08pm-2:00am"));
