// String
const myName = 'Manish';
console.log(myName, `<${typeof myName}>`);

// Number (Integers & Decimals)
const myAge = 32;
console.log(myAge, `<${typeof myAge}>`);
const width = 50.35;
console.log(width, `<${typeof width}>`);

// Boolean
const isMarried = true;
console.log(isMarried, `<${typeof isMarried}>`);

// Null
// null is an intentional absence of any object value.You assign null when a variable should have no value.
// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
const babies = null;
console.log(babies, `<${typeof babies}>`);

// Undefined
// undefined means a variable has been declared but not yet assigned a value.It's the default value for uninitialized variables.
const hobby = undefined;
console.log(hobby, `<${typeof hobby}>`);

// Symbol
// Symbol Uniqueness: It's worth remembering that Symbol() always creates a unique value, even if the description string is the same.
const uniqueID = Symbol('uniqueID');
console.log(uniqueID, `<${typeof uniqueID}>`);
const sym1 = Symbol('test');
const sym2 = Symbol('test');
console.log(sym1 === sym2);

// BigInt
// BigInt allows you to represent integers larger than Number.MAX_SAFE_INTEGER with arbitrary precision.
// Number.MAX_SAFE_INTEGER: It’s the largest integer JavaScript can safely represent using the Number type (which uses 64-bit floating point).
// Number.MAX_SAFE_INTEGER = 2^53 - 1
const bigNumber = 77440122088096332n;
console.log(bigNumber, `<${typeof bigNumber}>`);
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.pow(2, 53) - 1); // 9007199254740991
const tooBig = 9007199254740992;
console.log(tooBig + 1 === tooBig); // true, incorrect math!