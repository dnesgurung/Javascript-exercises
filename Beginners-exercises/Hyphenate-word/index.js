 function hyphenateWords(string) {

return string.split(' ').join('-');
   
   }
let output = hyphenateWords('hello world');
console.log(output);
