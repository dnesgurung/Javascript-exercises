
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); //  [2 ,3, 4]

const restaurant = {
  name: 'Golden Sip',
  location: 'South harrow, London , UK',
  categories: ['Momo', 'Chowmein', 'Thaali', 'Thukpa'],
  starterMenu: ['Chatapte', 'Sekuwa', 'Choila', 'Sukuti'],
};

let[main, , secondary] = restaurant.categories;
console.log(main, secondary); // Momo Thaali
