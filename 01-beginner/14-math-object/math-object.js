// Square Root
console.log(Math.sqrt(25)); // Returns the square root of 25

// Absolute value
console.log(Math.abs(-10)); // Returns the absolute value (10)
console.log(Math.abs(10));  // Returns the absolute value (10)

// Round to nearest integer
console.log(Math.round(20.5)); // Rounds to nearest integer (21)
console.log(Math.round(20.4)); // Rounds to nearest integer (20)

// Round up
console.log(Math.ceil(20.4)); // Always rounds up (21)

// Round down
console.log(Math.floor(20.5)); // Always rounds down (20)

// Exponent (power)
console.log(Math.pow(8, 3)); // Returns 8 raised to the power of 3 (512)

// Minimum number
console.log(Math.min(8, 3, -1, 0)); // Returns the smallest number (-1)

// Maximum number
console.log(Math.max(8, 3, -1, 0)); // Returns the largest number (8)

// Get a random number
console.log(Math.random()); // Random decimal from 0 (inclusive) to 1 (exclusive)
console.log(Math.floor(Math.random() * 100 + 1)); // // Random integer between 1 and 100 (inclusive)
const min = 15, max = 25;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Get a random integer in a range

// Math Constants
console.log(Math.PI);       // Value of PI (3.141592653589793)
console.log(Math.E);        // Euler's number (2.718281828459045)