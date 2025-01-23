const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}



const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9


// Adding to an array 
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array 

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// Join 2 arrays 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); //['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
