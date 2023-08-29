let x;

const num = new Number(5);

// toString() - returns a string representation of the number
console.log("======== toString() ========");
x = num.toString();
console.log(x, typeof x);
console.log(num, typeof num);

// To get the length
console.log("======== length ========");
x = num.toString().length;
console.log(x);

// toFixed() - returns a string representation of the number with a specified number of decimals
console.log("======== toFixed() ========");
x = num.toFixed(4);
console.log(x);

// toPrecision() - returns a number with the specified length
console.log("======== toPrecision() ========");
x = (56.3672).toPrecision(5);
console.log(x);

// toExponential() -  convert a number to exponential notation and return its value as a string
console.log("======== toExponential() ========");
x = num.toExponential(2);
console.log(x, typeof x);

// toLocaleString() - returns a string representation of the number, using the current locale
console.log("======== toLocalString() ========");
x = num.toLocaleString('en-US');
console.log(x);

// valueOf - Get value
console.log("======== valueOf() ========");
x = num.valueOf();
console.log(x);

// The Number object itself has some properties and methods
// Largest and smallest possible number
let a = Number.MAX_VALUE;
let b = Number.MIN_VALUE;
console.log(a, b);
