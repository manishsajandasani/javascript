const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum3());

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 200 },
  { id: 2, name: 'Product 2', price: 500 },
  { id: 3, name: 'Product 3', price: 500 },
];
const cartPriceTotal = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(cartPriceTotal);