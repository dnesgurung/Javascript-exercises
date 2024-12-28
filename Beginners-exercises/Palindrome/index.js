
var isPalindrome = function(x) {
   // 1. Check if the number is negateive because negative numbers cannot be palindrome.
   if ( x < 0){
    return false; // It is not a palindrome number.
   }

  // 2. Converting the number to a string so that we can check each digit
   const numberAsString = x.toString();

  //3. Reversing the string
   const reversedString = numberAsString.split("").reverse().join("");

  // 4. Checking if the reversed string is equal to the original string 
   if (numberAsString === reversedString){
    return true; // It is a palindrom number
   } else {
    return false; // It is not a palindrome number.
   }
   
};
