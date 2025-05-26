/**
 * var (Oldest - ES5 and earlier)  
 */

// We can access a var variable before it is declared in the code, but its value will be undefined until the actual declaration line is reached
console.log(x);

// Here we declared x
var x;

// Here we initialized the var variable
x = 10;
console.log(x);

// var variables can be reassigned
x = 20;
console.log(x);

// var variables can be redeclared
var x = "Manish";
console.log(x);



/**
 * let (Newer - ES6/ES2015)
 */

// We cannot access a let variable before it is declared in the code and if trying to access them before declaration will result in a ReferenceError
// console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization

// let variables can be declared without initialization (let y), but its value will be undefined until the actual declaration line is reached
let y;
console.log(y);

// Here we initialized the let variable
y = 10;
console.log(y);

// let variables can be reassigned
y = 20;
console.log(y);

// let variables cannot be redeclared
// let y = "Sonam Bajwa"; // Uncaught SyntaxError: Identifier 'y' has already been declared
// console.log(y);



/**
 * const (Newer - ES6/ES2015)
 */

// We cannot access a const variable before it is declared in the code and if trying to access them before declaration will result in a ReferenceError
// console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization

// We have to intialize a const variable at the time of declaration
// const z; // Uncaught SyntaxError: Missing initializer in const declaration

// Here we declared and initialized the const variable
const z = 10
console.log(z);

// const variables cannot be reassigned
// z = 20; // Uncaught TypeError: Assignment to constant variable
// console.log(z);

// const variables cannot be redeclared
// const z = "Katrina Kaif"; // Uncaught SyntaxError: Identifier 'z' has already been declared
// console.log(z);