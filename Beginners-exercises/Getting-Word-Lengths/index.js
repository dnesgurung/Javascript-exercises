function getWordLengths(string) {
// Your code goes here...
let word = string.split(" ");
let newArray = [];
if(string === ''){
  return newArray
}
for (let item of word){
  newArray.push(item.length);
}
return newArray;
}
