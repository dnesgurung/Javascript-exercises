// 1. Using for of loop

function swapCase(str){

    // Using split method
    let letters = str.split('');
    
    // Create an empty array to store
    let newArray = [];
    // We use loop for of
    for ( let letter of letters){
        if (letter === letter.toUpperCase()){
            newArray.push(letter.toLowerCase())
        } else{
            newArray.push(letter.toUpperCase())
        }
    }
    return newArray.join('');
}

let output = swapCase('AbCdE');
console.log(output);
