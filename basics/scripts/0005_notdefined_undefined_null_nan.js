/**
 * Not Defined
 * Uncaught ReferenceError: myAge is not defined
 * console.log(myAge);
 */

/**
 * Undefined or Uninitialized 
 */
var a, b;
var c = undefined;
console.log(a, b, c);

/**
 * null 
 */
var abcd = null;
console.log(abcd);

// NaN (Not a Number)
aa = a + 1;  // undefined + number
bb = b + true; // undefined + boolean
console.log(aa, bb);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

// Extras
cc = c + " String!"; 
console.log(cc);
console.log(0 / 3);  // 0
console.log(3 / 0);  // Infinity