let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

console.log("======== Nesting berries inside of fruits ========");
fruits.push(berries);
console.log(fruits);

console.log("======== Now we can access 'blueberry' with the following ========");
x = fruits[3][1];
console.log(x);

console.log("======== Create a new variable and nest both Arrays ========");
const allFruits = [fruits, berries];
console.log(allFruits);
x = allFruits[1][2];
console.log(x);

console.log("======== concat() - Concatenate arrays ========");
x = ['1','2','3'].concat(['4','5','6']);
console.log(x);

console.log("======== spread operator (...) - Concatenate with ========");
const abcd = ['a', 'b', 'c', 'd'];
const efgh = ['e', 'f', 'g', 'h'];
x = [...abcd, ...efgh];
console.log(x);

console.log("======== flat() - Flatten an array ========");
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();
console.log(x);

console.log("======== isArray() - Check is is an array ========");
x = Array.isArray(abcd);
console.log(x);

console.log("======== from() - Create an array from an array like value ========");
x = Array.from('1234ABCD');
console.log(x);
x = Array.from('Manish');
console.log(x);

console.log("======== of() - Create an array from a set of values ========");
const a = 1;
const b = "Manish";
const c = true;
x = Array.of(a, b, c);
console.log(x);