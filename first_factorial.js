function FirstFactorial(n) { 

  if (n === 0) {
    return 1;
  }
  return n * FirstFactorial(n-1);
         
}

console.log(FirstFactorial(5));
   

           