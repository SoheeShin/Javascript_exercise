//Using the JavaScript language, have the function VowelCount(str) take the str string 
//parameter being passed and return the number of vowels the string contains (ie. "All cows 
//eat grass" would return 5). Do not count y as a vowel for this challenge. 

function VowelCount(str){

  var Vowel = 'aeiouAEIOU';
  var count = 0;
  
  for(var i = 0; i <str.length ; i++){
    if (Vowel.indexOf(str[i]) !== -1){
      count += 1;
    }
  
  }
  return count;
}
