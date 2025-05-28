// Coerced to a String (number is coerced into a string)
console.log(5 + '5');                           // "55"

// No coercion here, manual conversion using Number()
console.log(5 + Number('5'));                   // 10

// Coerced to a Number (string '5' is coerced to number)
console.log(5 * '5');                           // 25

// null is coerced to 0 in numeric operations
console.log(5 + null);                          // 5

// Boolean coercion: true → 1, false → 0
console.log(5 + true);                          // 6
console.log(5 + false);                         // 5

// Subtraction and division coerce strings to numbers
console.log('10' - 5);                          // 5
console.log('10' / '5');                        // 2

// Multiplying a non-numeric string returns NaN
console.log(5 * 'hello');                       // NaN

// Adding undefined results in NaN (undefined is not coercible to number)
console.log(5 + undefined);                     // NaN

// Boolean and String in addition – coerces boolean to string
console.log('The value is ' + true);            // "The value is true"

// false and string
console.log('value is ' + false);               // "value is false"

// null + string
console.log("Hello " + null);                   // "Hello null"

// undefined + string
console.log("Value: " + undefined);             // "Value: undefined"

// Complex coercion in comparisons
console.log('5' == 5);                          // true   (== does coercion)
console.log('5' === 5);                         // false  (strict comparison)
console.log(null == undefined);                 // true
console.log(null === undefined);                // false

// Corner Case: Arrays and Objects
console.log([] + []);                           // ""      (both arrays coerced to "")
console.log([] + {});                           // "[object Object]"
console.log({} + []);                           // 0 or "[object Object]" depending on context

/**
 * To avoid unexpected bugs due to coercion:
 * Prefer strict comparison(===) over loose comparison(==)
 * Use explicit conversion  (Number(), String(), Boolean()) when clarity matters
 */

