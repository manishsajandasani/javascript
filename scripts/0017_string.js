const myName = "Manish";
const myAge = 30;
let x;

console.log("======== String Concatenation ========");
x = 'Hello, my name is ' + myName + ' and I am ' + myAge + ' years old.';
console.log(x);

console.log("======== Template Literals ========");
x = 'Hello, my name is ${myName} and I am ${myAge} years old.';
console.log(x);
x = "Hello, my name is ${myName} and I am ${myAge} years old.";
console.log(x);
x = `Hello, my name is ${myName} and I am ${myAge} years old.`;
console.log(x);
x = `Hello, 
my name is ${myName} 
and I am
${myAge} years old.`;
console.log(x);

console.log("======== String Properties and Methods ========");
/**
 * (JS does this automatically when using a property or method on a primitive string)
 * Creating a "string object" 
*/
const s1 = new String('Manish');  // String Object Type
const s2 = "Manish";              // String Primitive Type

console.log("======== length property ========");
console.log(s1.length, s2.length);

console.log("======== typeof operator ========");
console.log(typeof s1, typeof s2);

console.log("======== Access value by key/index ========");
console.log(s1[0], s2[0]);

// Shows the prototype of the string object. Shows the properties and methods
console.log("======== Prototype ========");
console.log(s1.__proto__);
console.log(s2.__proto__);

console.log("======== Change Case ========");
x = s2.toUpperCase();
console.log(x, s2);

// charAt() - returns the character at the specified index
console.log("======== charAt() ========");
x = s2.charAt(0);
console.log(x, s2);
x = s2.charAt(s1.length - 1)
console.log(x, s2);

// indexOf - returns the index of the first occurrence of a specified value in a string
console.log("======== indexOf() ========");
x = s2.indexOf('n');
console.log(x, s2);

// substring() - search a string for a specified value and returns a new string
console.log("======== substring() ========");
console.log(s2.substring(-13, 3), s2.substring(3), s2.substring(4, 2), s2);

// slice() - extracts a part of a string and returns a new string
console.log("======== slice() ========");
console.log(s2.slice(-13, 3), s2.slice(3), s2.slice(4, 2), s2);

// trim() - returns a new string after removing whitespace from beginning & end of string
console.log("======== trim() ========");
x = '         Hello World';
console.log(x.trim(), x);

// replace() - replace all instances of a string and returns a new string
console.log("======== replace() ========");
x = "My name is Khan";
console.log(x.replace('Khan', 'Don'), x);

// includes() - returns true if the string is found
console.log("======== includes() ========");
console.log(x.includes('Khan'), x.includes('Hell'));

// valueOf() - returns the primitive value of a variable
console.log("======== valueOf() ========");
console.log(x.valueOf());

// split() - returns an array of strings
console.log("======== split() ========");
x = s2.split('');
console.log(x, s2);