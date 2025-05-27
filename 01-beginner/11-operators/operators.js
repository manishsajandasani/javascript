/**
 * Arithmetic Operators
 * Used for mathematical operations
 */
console.log(5 + 3);       // 8
console.log(5 - 3);       // 2
console.log(5 * 3);       // 15
console.log(5 / 2);       // 2.5
console.log(5 % 2);       // 1  (modulus)
console.log(2 ** 3);      // 8  (exponentiation)

// console.log(5++);      // SyntaxError: Invalid left-hand side expression in postfix operation
// console.log(++5);      // ❌ SyntaxError (must be a variable)
let a = 5;
console.log(a++);         // 5
console.log(a);           // 6
console.log(--a);         // 5

/**
 * Assignment Operators
 */
let x = 10;
x += 5;           // x = x + 5
console.log(x);   // 15
x -= 3;
console.log(x);   // 12
x *= 2;
console.log(x);   // 24
x /= 4;
console.log(x);   // 6
x %= 4;
console.log(x);   // 2
x **= 3;
console.log(x);   // 8

/**
 * Comparison Operators
 */
console.log(5 == '5');      // true (loose equality - just the value not the type)
console.log(5 === '5');     // false (strict equality - type and value both)
console.log(5 != '5');      // false
console.log(5 !== '5');     // true
console.log(7 > 5);         // true
console.log(7 < 5);         // false
console.log(7 >= 7);        // true
console.log(5 <= 6);        // true

/**
 * Logical Operators 
 */
console.log(true && false);                           // false
console.log(true || false);                           // true
console.log(!true);                                   // false
console.log(1 && 4);                                  // 4 (last truthy)
console.log(0 && 5);                                  // 0 (first falsy)
console.log(5 || 0);                                  // 5 (first truthy)
console.log(0 || null || undefined || NaN);           // 5 (last falsy)

/**
 * String Concatenation (with +)
 */
console.log("Hello " + "World");  // "Hello World"
console.log("5" + 1);             // "51" (string coercion)

/**
 * Ternary (Conditional) Operator
 */
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);   // "Adult"

/**
 * Type Operators (typeof, instanceof)
 * used to check type and prototype inheritance.
 */
console.log(typeof "hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
const obj = {};
console.log(obj instanceof Object); // true

/**
 * Nullish Coalescing Operator (??)
 * Returns the right-hand value only if the left-hand is null or undefined.
 */
let value = null;
console.log(value ?? "default");   // "default"
let another = 0;
console.log(another ?? 100);       // 0 (because 0 is not null/undefined)

/**
 * Optional Chaining (?.)
 * Safely access deeply nested properties.
 */
const user = {
  profile: {
    name: "Alice"
  }
};
console.log(user.profile?.name);     // "Alice"
console.log(user.contact?.email);    // undefined (no error) else Uncaught TypeError: Cannot read properties of undefined (reading 'email')

/**
 * Comma Operator
 */
let result = (1 + 2, 3 + 4);
console.log(result);   // 7

/**
 * Delete Operator
 * Deletes a property from an object.
 */
const person = { name: "John", age: 30 };
delete person.age;
console.log(person);   // { name: "John" }

/**
 * in Operator
 * Checks if a property exists in an object.
 */
console.log("name" in person);   // true
console.log("age" in person);    // false

/**
 * Bitwise Operators
 * Bitwise operators treat their operands as 32-bit integers and work bit by bit.
 * If you’re asked to optimize space or toggle binary states, bitwise ops are a go-to. Also great for bitmasking, compression, and graphics.
 */
console.log(5 & 1);    // 1  (AND)
console.log(5 | 1);    // 5  (OR)
console.log(5 ^ 1);    // 4  (XOR)
console.log(~5);       // -6 (NOT)
console.log(5 << 1);   // 10 (left shift)
console.log(5 >> 1);   // 2  (right shift)