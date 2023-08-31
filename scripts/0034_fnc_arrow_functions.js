// Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));

// Implicit Return
const subtract = (a, b) => a - b;
console.log(subtract(10, 20));

// Can leave off () with a single param
const double1 = (a) => a * 2;
const double2 = a => a * 2;
console.log(double1(100), double2(200));

// Returning an object
const createObj = () => ({
    name: 'Chadd',
});
console.log(createObj());

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
    console.log(n);
});

// Arrow function in a callback
const numbers2 = [10, 20, 30, 40, 50];
numbers2.forEach((n) => console.log(n));
