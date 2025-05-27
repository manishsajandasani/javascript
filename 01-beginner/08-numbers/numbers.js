const myNum = 145;
const myNumTwo = new Number(17745896.856);

// toString() - Converts a number to a string, optionally in a specified base
console.log(myNum.toString());
console.log(myNum.toString().length);

// toFixed() - Formats a number using fixed-point notation (great for currency, decimals)
console.log(myNum.toFixed(2));
console.log(myNum.toFixed(8));

// toPrecision() - Formats a number to a specified length (useful for significant digits)
console.log(myNum.toPrecision(6));

// toExponential() - Returns a string representing the number in exponential notation
console.log(myNum.toExponential());

// toLocaleString() - Converts a number to a locale-sensitive string, adding commas as separators and using a period for the decimal. (e.g., currency, percentages)
console.log(myNumTwo.toLocaleString('en-US'));
console.log(myNumTwo.toLocaleString('en-IN'));

// valueOf() - Returns the primitive value of a Number object
console.log(myNumTwo.valueOf());

// Number.isFinite() - Determines if the passed value is a finite number
console.log(Number.isFinite(100));           // true
console.log(Number.isFinite(Infinity));      // false
console.log(Number.isFinite('100'));         // false (string, not number)
console.log(Number.isFinite(NaN));           // false

// Number.isInteger() - Checks if a value is an integer
console.log(Number.isInteger(145));          // true
console.log(Number.isInteger(145.5));        // false
console.log(Number.isInteger('145'));        // false

// Number.isNaN() - Determines if the passed value is NaN (Not-A-Number)
console.log(Number.isNaN(NaN));              // true
console.log(Number.isNaN('hello'));          // false
console.log(Number.isNaN(123 / 'abc'));      // true (NaN result)

// Number.parseFloat() - Parses a string and returns a floating point number
console.log(Number.parseFloat("3.14159"));   // 3.14159
console.log(Number.parseFloat("42px"));      // 42
console.log(Number.parseFloat("abc42"));     // NaN

// Number.parseInt() - Parses a string and returns an integer (with optional radix)
console.log(Number.parseInt("123abc"));      // 123
console.log(Number.parseInt("1010", 2));     // 10 (binary to decimal)
console.log(Number.parseInt("0xFF", 16));    // 255 (hexadecimal)

// Number.MAX_VALUE - The largest possible numeric value in JavaScript
console.log(Number.MAX_VALUE);               // ~1.7976931348623157e+308

// Number.MIN_VALUE - The smallest positive numeric value (closest to zero)
console.log(Number.MIN_VALUE);               // ~5e-324

// Number.MAX_SAFE_INTEGER - Largest safe integer in JavaScript (2^53 - 1)
console.log(Number.MAX_SAFE_INTEGER);        // 9007199254740991

// Number.MIN_SAFE_INTEGER - Smallest safe integer in JavaScript (-(2^53 - 1))
console.log(Number.MIN_SAFE_INTEGER);        // -9007199254740991
