function repeatString(str, count){
    if (( str == null) || (count == null) || (count == Infinity) || (count < 0)){
        return "Error in string or count."
    } else {
        //Using repeat method
        // return str.repeat(count);

        //Using for loop
        //     let text = '';
        //     for(let i = 0; i < count; i++){
        //         text+= str;
        //     }
        //     return text;

        // Using an array 
        let text = [];
        for(let i = 0; i < count; i++){
            text.push(str);
        }
        return text.join('');
    }
    
}

let output = repeatString('a',3 );
console.log(output);
