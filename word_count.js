//Using the JavaScript language, have the function WordCount(str) take the str string 
//parameter being passed and return the number of words the string contains (ie. "Never eat 
//shredded wheat" would return 4). Words will be separated by single spaces.

function WordCount(str){

  var strArray = str.split(' ');
  return strArray.length;
}
