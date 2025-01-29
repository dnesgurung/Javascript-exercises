console.log(0 && 'Dinesh'); // 0
console.log(7 && 'Dinesh'); // Dinesh

console.log('Hello' && 23 && null && 'Dinesh'); //null

// Practical example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach'); //mushrooms
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // mushrooms
