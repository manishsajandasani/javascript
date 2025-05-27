/**
 * Falsy Values
 * There are exactly 7 falsy values in JavaScript. All other values are considered truthy.
 * false (Boolean False), 0 (Number Zero), -0 (Negative Zero), 0n (BigInt Zero), "" (empty string), undefined, null, NaN (Not-a-Number)
 */
console.log(Boolean(false));              // false
console.log(Boolean(0));                  // false
console.log(Boolean(-0));                 // false
console.log(Boolean(0n));                 // false
console.log(Boolean(undefined));          // false
console.log(Boolean(null));               // false
console.log(Boolean(NaN));                // false
const value = 0n;
if (!value) {
  console.log("It's falsy");
}

/**
 * Truthy Values
 * Anything that’s not falsy is truthy.
 * true, {}, [], " ", 42, -42, "0", "false", 3.14, "hello", Infinity, -Infinity, new Date(), function() {}
 */
console.log(Boolean(true));               // true
console.log(Boolean({}));                 // true
console.log(Boolean([]));                 // true
console.log(Boolean(" "));                // true
console.log(Boolean(42));                 // true
console.log(Boolean(-42));                // true
console.log(Boolean("0"));                // true
console.log(Boolean("false"));            // true
console.log(Boolean(3.14));               // true
console.log(Boolean("hello"));            // true
console.log(Boolean(Infinity));           // true
console.log(Boolean(-Infinity));          // true
console.log(Boolean(new Date));           // true
console.log(Boolean(function () { }));    // true

/**
 * Double Negation
 * Use double negation to quickly convert any value to its Boolean equivalent
 */
console.log(!!"hello");                   // true
console.log(!!0);                         // false
console.log(!![]);                        // true

/**
 * Practical Usage
 */
const name = "";
if (name) {
  console.log("Hello " + name);
} else {
  console.log("No name provided"); // ← This runs
}

const user = {};
if (user) {
  console.log("User exists"); // ← This runs
}
