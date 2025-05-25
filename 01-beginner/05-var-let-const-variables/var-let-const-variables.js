/**
 * var (Oldest - ES5 and earlier)  
 */

const styles = 'color: red; font-weight: bold: font-size: 18px;'
console.log('%cWe can access a var variable before it is declared in the code, but its value will be undefined until the actual declaration line is reached', styles);
console.log(x);

// Here we declared x
var x;

console.log('%cHere we initialized the var variable (x = 10)', styles);
x = 10;
console.log(x);

console.log('%cvar variables can be reassigned (x = 20)', styles);
x = 20;
console.log(x);

console.log('%cvar variables can be redeclared (var x = "Manish")', styles);
var x = "Manish";
console.log(x);



/**
 * let (Newer - ES6/ES2015)
 */
console.log('%cWe cannot access a let variable before it is declared in the code and if trying to access them before declaration will result in a ReferenceError', styles);
// console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization

console.log('%clet variables can be declared without initialization (let y), but its value will be undefined until the actual declaration line is reached', styles);
let y;
console.log(y);

console.log('%cHere we initialized the let variable (y = 10)', styles);
y = 10;
console.log(y);

console.log('%clet variables can be reassigned (y = 20)', styles);
y = 20;
console.log(y);

console.log('%clet variables cannot be redeclared (let y = "Sonam Bajwa")', styles);
// let y = "Sonam Bajwa"; // Uncaught SyntaxError: Identifier 'y' has already been declared
// console.log(y);



/**
 * const (Newer - ES6/ES2015)
 */
console.log('%cWe cannot access a const variable before it is declared in the code and if trying to access them before declaration will result in a ReferenceError', styles);
// console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization

console.log('%cWe have to intialize a const variable at the time of declaration', styles);
// const z; // Uncaught SyntaxError: Missing initializer in const declaration

console.log('%cHere we declared and initialized the const variable (const z = 10)', styles);
const z = 10
console.log(z);

console.log('%cconst variables cannot be reassigned (z = 20)', styles);
// z = 20; // Uncaught TypeError: Assignment to constant variable
// console.log(z);

console.log('%cconst variables cannot be redeclared (const z = "Katrina Kaif")', styles);
// const z = "Katrina Kaif"; // Uncaught SyntaxError: Identifier 'z' has already been declared
// console.log(z);