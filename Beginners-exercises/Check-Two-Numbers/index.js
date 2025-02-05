// My solution

function checkNumbers ( a, b) {
    if(a === 100 || b === 100){
        return true;
    } else if (a + b === 100){
        return true;
    } else {
        return false;
    }
    
}

console.log(checkNumbers(50, 0));
