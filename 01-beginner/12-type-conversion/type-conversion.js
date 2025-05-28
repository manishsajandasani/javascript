/**
 * Convert String to Number (Integers and Decimals)
 * parseInt and parseFloat can extract numbers from the beginning of a string
 * Number() and unary + expect valid full numeric strings — otherwise return NaN
 */
const stringOne = '100World';
const stringTwo = '42';
const stringThree = '50.658';

console.log(parseInt("Hello"));         // NaN
console.log(parseInt(stringOne));       // 100 (parses until non-digit)
console.log(parseInt(stringTwo));       // 42
console.log(parseInt(stringThree));     // 50

console.log(parseFloat("Hello"));       // NaN
console.log(parseFloat(stringOne));     // 100
console.log(parseFloat(stringTwo));     // 42
console.log(parseFloat(stringThree));   // 50.658

console.log(+"Hello");                  // NaN
console.log(+stringOne);                // NaN (not a clean number)
console.log(+stringTwo);                // 42
console.log(+stringThree);              // 50.658

console.log(Number("Hello"));           // NaN
console.log(Number(stringOne));         // NaN
console.log(Number(stringTwo));         // 42
console.log(Number(stringThree));       // 50.658


/**
 * Convert Number to String
 */
const numOne = 92;
const numTwo = 40.895;

console.log(numOne.toString());         // "92"
console.log(numTwo.toString());         // "40.895"
console.log(String(numOne));            // "92"
console.log(String(numTwo));            // "40.895"


/**
 * Convert Number to Boolean
 */
console.log(Boolean(1));                // true
console.log(Boolean(0));                // false
console.log(Boolean(-0));               // false
console.log(Boolean(-10));              // true
console.log(Boolean(NaN));              // false
console.log(Boolean(Infinity));         // true


/**
 * Convert String to Boolean
 */
console.log(Boolean(""));               // false (empty string)
console.log(Boolean(" "));              // true (whitespace)
console.log(Boolean("false"));          // true (non-empty string)
console.log(Boolean("0"));              // true


/**
 * Convert Boolean to Number
 */
console.log(Number(true));              // 1
console.log(Number(false));             // 0
console.log(+true);                     // 1
console.log(+false);                    // 0


/**
 * Convert Boolean to String
 */
console.log(String(true));              // "true"
console.log(String(false));             // "false"


/**
 * Null, Undefined & Others
 */
console.log(Number(null));              // 0
console.log(Number(undefined));         // NaN

console.log(Boolean(null));             // false
console.log(Boolean(undefined));        // false

console.log(String(null));              // "null"
console.log(String(undefined));         // "undefined"
