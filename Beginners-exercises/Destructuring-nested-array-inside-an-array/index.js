
const nested = [2, 4, [ 5, 6]];

const[i, ,[j, k] ] = nested;
console.log(i, j, k); // 2, 5, 6
