function isThisAPalindrome(str) {
    // Your code goes here...
    let len = str.length;
    for (let i = 0; i<len/2; i++){
        if(str[i] !== str[len - 1 -i]){
            return false;
        }
    }
    return true;
    }
