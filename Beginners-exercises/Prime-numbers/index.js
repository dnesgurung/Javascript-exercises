function checkIsPrime(num) {
    // Your code goes here...
 if (num <= 1) return false;
 if (num === 2) return true; // 2 is a prime number
 if (num % 2 === 0) return false; //any number divided by 2 is an even number so it is not a prime number

for (let i = 3, s = Math.sqrt(num);i <= s; i+=2){
    if (num % i === 0) return false;
}
return true;

    }
