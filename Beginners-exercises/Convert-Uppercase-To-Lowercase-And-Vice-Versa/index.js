// 1. Using for of loop

// function swapCase(str){

//     // Using split method
//     let letters = str.split('');
    
//     // Create an empty array to store
//     let newArray = [];
//     // We use loop for of
//     for ( let letter of letters){
//         if (letter === letter.toUpperCase()){
//             newArray.push(letter.toLowerCase())
//         } else{
//             newArray.push(letter.toUpperCase())
//         }
//     }
//     return newArray.join('');
// }


// 2. Using for of and match method

// function swapCase(str){
//     let letters = str.split('');
//     let newArray = [];
//     for (letter of letters){
//         if(letter.match('[A-Z]')){
//             newArray.push(letter.toLowerCase())
//         } else {
//             newArray.push(letter.toUpperCase())
//         }
//     }
//     return newArray.join('');
// }


// 3. using swap method

function swapCase(str){
    let letters = str.split('');
    let newArray = [];
    

}

let output = swapCase('AbCdE');
console.log(output);
