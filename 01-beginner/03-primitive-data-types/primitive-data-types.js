// String
const myName = 'Manish';
console.log(myName, `<${typeof myName}>`)

// Number (Integers & Decimals)
const myAge = 32;
console.log(myAge, `<${typeof myAge}>`)
const width = 50.35;
console.log(width, `<${typeof width}>`)

// Boolean
const isMarried = true;
console.log(isMarried, `<${typeof isMarried}>`)

// Null
// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
const babies = null;
console.log(babies, `<${typeof babies}>`)

// Undefined
const hobby = undefined;
console.log(hobby, `<${typeof hobby}>`)

// Symbol
const uniqueID = Symbol('uniqueID');
console.log(uniqueID, `<${typeof uniqueID}>`)
const sym1 = Symbol('test');
const sym2 = Symbol('test');
console.log(sym1 === sym2);

// BigInt
const bigNumber = 77440122088096332n;
console.log(bigNumber, `<${typeof bigNumber}>`)


// NOTES:
// null is an intentional absence of any object value.You assign null when a variable should have no value.
// undefined means a variable has been declared but not yet assigned a value.It's the default value for uninitialized variables.
// Symbol Uniqueness: It's worth remembering that Symbol() always creates a unique value, even if the description string is the same.