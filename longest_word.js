
function LongestWord(sen){
  var myArray = sen.match(/\w[a-z]{0,}/gi);
  var result = myArray[0];

  for(var i = 1 ; i < myArray.length ; i++){
    if(result.length < myArray[i].length){
    result = myArray[i];
    } 
  }
  return result;
}

 

console.log(LongestWord("mile hi ever untitled"));
console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));

