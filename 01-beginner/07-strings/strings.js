/**
 * String Object
 * JavaScript automatically wraps a primitive string (like "hello") into a String object temporarily whenever you access a property or method on it.
 * Even though str is a primitive, JavaScript allows calling methods like .length or .toUpperCase() on it.
 
 * What’s happening behind the scenes:
 * JavaScript encounters a method or property call on a primitive string.
 * It temporarily wraps the primitive in a String object (new String(str)).
 * Executes the method on the object.
 * Immediately discards the wrapper object. 
 * Behind the scenes => new String("hello").toUpperCase(); // "HELLO"
 
 * This automatic boxing happens only in read-only or method-call scenarios.
 * You cannot add custom properties to primitives — they disappear instantly:
 * let s = "hello"; s.myProp = 123; console.log(s.myProp); // undefined
 */

/**
 * String Immutability in JavaScript
 * Strings are immutable, meaning you cannot change the characters in a string directly.
 * Any operation that appears to change a string actually returns a new string.
  
let name = "Ravi";
name[0] = "K";
console.log(name); // "Ravi" → unchanged
name = "Kavi"; // Only by reassigning can you change it

let greeting = "Hi";
greeting[0] = "B";
console.log(greeting); // "Hi", not "Bi"
 */

/**
 * slice()
 * Supports Negative Indices (from end)
 * Doesn't swap if start > end

 * substring()
 * Doesn't support Negative Indices (from end)
 * Swaps start and end if start > end

 * "abcdef".slice(-3);       // "def"
 * "abcdef".substring(-3);   // "abcdef" → negative treated as 0
 * "abcdef".substring(3, 0); // "abc" → start and end swapped
 */

/**
 * Avoid using new String() unless necessary; it creates an object, not a primitive
 * console.log(typeof "Hello");         // string
 * console.log(typeof new String("Hello")); // object
 */

const varOne = 'Manish';
const varTwo = 32;

// Concatenation
console.log('My name is ' + varOne + '. I am ' + varTwo + ' years old.');
let sayHello = "Hello";
sayHello += " World!!";
console.log(sayHello);

// Template Literals
console.log(`My name is ${varOne}. I am ${varTwo} years old.`);

// typeof - Returns "string" for string primitives
const varThree = 'Rohan';
console.log(typeof varThree);

// length - Returns the number of characters in the string
console.log(varThree.length);

// new String() - Creates a String object (not a primitive)
const varFour = new String('Vicky-Preeti');

// Access Character of a String by Index
console.log(varFour[0]);

// toUpperCase() - Converts the string to uppercase
console.log(varFour.toUpperCase());

// toLowerCase() - Converts the string to lowercase
console.log(varFour.toLowerCase());

// charAt() - Returns the character at the specified index
console.log(varFour.charAt(4));

// indexOf() - Returns the index of the first occurrence of the given substring
console.log(varFour.indexOf('-'));

// trim() - Removes whitespace from both ends of the string
console.log("   Blow    Room".trim());

// replace() - Replaces the first occurrence of "old" with "new"
console.log("Hello World!! This is me.".replace("World", "Universe"));

// includes() - Checks if the string contains the specified substring (returns true/false)
console.log("Hello World!! This is me.".includes("me."));

// valueOf() - Returns the primitive value of the String object
const varFive = new String('Bablu Prasad').valueOf();
console.log(varFive, `<${typeof varFive}>`);

// split() - Splits the string into an array based on the given delimiter
const varSix = "It's been a long day without you my friend";
console.log(varSix.split(" "));

// slice() - Extracts a section of the string from start to end (end is not included)
const varSeven = "An apple a day, keeps the doctor away";
const slicedVarSeven = varSeven.slice(3, 8);
console.log(varSeven, `<${slicedVarSeven}>`);
console.log("abcdef".slice(-3));

// substring() - Similar to slice(), but does not support negative indices
const substringVarSeven = varSeven.substring(3, 8);
console.log(substringVarSeven);
console.log(varSeven.substring(9));
console.log("abcdef".substring(-3)); // treats negative as 0

// __proto__ - Returns the prototype object of the string, showing available methods
// Shows all string methods (like slice, substring, indexOf, etc.)
console.log(varSeven.__proto__);