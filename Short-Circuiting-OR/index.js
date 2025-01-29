console.log(3 || 'Dinesh'); //3
console.log(''|| 'Dinesh'); // Dinesh
console.log(true || 0); //true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); //10

const guest2 = restaurant.numGuests || 10;
console.log(guest2); //10
