function LetterChanges(str) { 

  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var VOWEL = 'aeiou';
  var new_str= '';
  var newer_str= '';
  
  
  for(var i=0 ; i < str.length ; i++){
    if(str.charAt(i)=== 'z'){
        new_str += 'a';
    }else if(LOWER.indexOf(str.charAt(i))!== -1){
        new_str += LOWER.charAt(LOWER.indexOf(str.charAt(i))+1);
    }else {
        new_str += str.charAt(i);
    }
  }
  
  for(var j=0 ; j < new_str.length ; j++){
    if(VOWEL.indexOf(new_str.charAt(j))!== -1){
        newer_str += new_str.charAt(j).toUpperCase();
    }else{
        newer_str += new_str.charAt(j);
    }
  }
  
  
  
  return newer_str; 
         
}

console.log(LetterChanges("hello*3"))
