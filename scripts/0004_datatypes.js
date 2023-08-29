/**
 * Primitive Types
 * Ex. String, Number, Boolean, Null, Undefined, Symbol, BigInt
 * 
 * Reference Types or Objects are non-primitive. When assigned to a variable, the variable is given a reference to that value.
 * Ex. Arrays, Object Literals, Functions 
 */

/**
 * Static Typing vs. Dynamic Types
 * JS is a dynamically typed language. This means, we do not explicitly define the types for our variables. Many other languages are statically-typed languages such as C++, C#, Java, etc.
 * 
 * TypeScript is a superset of JavaScript, which allow static-typing. This can make your code verbose and less prone to errors.  
 */

// String
const myName = 'Maneet';
console.log(typeof myName);

// Number
const age = 30;
const temp = 98.9;
console.log(typeof age, typeof temp);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const aptNumber = null;
console.log(typeof aptNumber);

// Undefined
// let score;
const score = undefined;

// Reference Types (Array, Object, Function)
const numbers = [1, 2, 3, 4];
console.log(numbers);

const person = {
  name: 'Manish',
};
console.log(person);

function sayHello() {
  console.log('Hello');
}
const output = sayHello;
console.log(output, typeof output);

// Symbol
const id = Symbol('id');
console.log(id);

// BigInt
const n1 = 9007199254740991n;
console.log(n1);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
