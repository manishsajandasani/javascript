/**
 * Not Defined (ReferenceError)
 * A variable that was never declared — trying to access it throws a runtime error.
 */
// console.log(someValue);               // ReferenceError: someValue is not defined
if (typeof someValue === 'undefined') {
  console.log("someValue is not defined");
}

/**
 * undefined
 * A variable that has been declared but not assigned a value.
 */
let count;
console.log(count);                   // undefined
console.log(typeof count);            // "undefined"

function logMessage(msg) {
  console.log(msg);                   // undefined if no argument passed
}
logMessage();

/**
 * null
 * An intentional absence of any value — you set it explicitly.
 */
let user = null;
console.log(user);                    // null
console.log(typeof user);             // "object" (quirk in JS, but it's still null)
user = "Robert";
console.log(user);                    // "Robert"

/**
 * NaN (Not a Number)
 * A special number value that stands for an unrepresentable or invalid number result.
 */
const result = 0 / 0;
console.log(result, typeof result);
console.log(undefined + 123);
console.log(undefined + false);
console.log(undefined + undefined);
console.log(undefined + ' Pizza');    // undefined Pizza
console.log('ABC' * 3);
console.log('ABC' * undefined);
console.log(Math.sqrt(-1));
console.log(Number('XYZ'));           // NaN
console.log(isNaN('Rohan'));          // true (but not ideal, use Number.isNaN)
console.log(Number.isNaN('Rohan'));   // false (correct way)
console.log(Number.isNaN(NaN));       // true