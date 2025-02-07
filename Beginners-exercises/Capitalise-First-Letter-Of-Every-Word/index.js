// Capitalise the first letter of each word in a string

let myString = 'practice code'

// 1. using function and for loop 

// function capitaliseFirstLetter(str){
//     let word = str.split(' ');
//     console.log(word);

//     for (let i = 0; i < word.length; i++){
//          word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
        
//     }
//     return word.join(' ');
// }

// let output = capitaliseFirstLetter(myString);
// console.log(output);

//2. Using for of loop

// function capitaliseFirstLetter(str){
//     let word = str.split(' ');
//     // We create a newArry variable empty array 
//     let newArray = [];
//     for( let value of word){
//         let result =  value.charAt(0).toUpperCase() + value.slice(1);
//         newArray.push(result);
//     }
//     return newArray.join(' ');
// }

// let output = capitaliseFirstLetter(myString);
// console.log(output);


// 3. Using map and replace 

function capitaliseFirstLetter(str){
    let word = str.split(' ');
    return word.map(str => {
        return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    }).join(' ');
}

let output = capitaliseFirstLetter(myString);
console.log(output);
