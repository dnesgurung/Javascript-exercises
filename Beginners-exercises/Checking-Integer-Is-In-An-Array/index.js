var V = 11;
var foundV = false;
 for ( let i = 0; i < arNums.length; i ++){
    if(arNums[i] == V){
     foundV = true;
    }
 }

 if(foundV == true){
    console.log("V is in the array")
 } else {
    console.log("V is not in the array")
 }
