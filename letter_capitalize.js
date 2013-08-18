//Using the JavaScript language, have the function LetterCapitalize(str) 
//take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space.

function LetterCapitalize(str){

  var myArray = str.split(' ');
  var newArray = [];
    
  for(var i = 0; i < myArray.length; i++){
      newArray.push(myArray[i].charAt(0).toUpperCase()+myArray[i].slice(1));
  }
  return newArray.join(' ');
}

console.log(LetterCapitalize("crispy crunchy oatmeal raisin cookies"))