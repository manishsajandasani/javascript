let style = "color: yellow";
console.log("%c==== Print undefined ====", style);

/**
 * Undefined means the variable has been declared, but its value has not been assigned. 
 * The typeof() operator returns undefined for an undefined variable.
 * Undefined or Uninitialized 
 * 
 * 
 * Read Following:
 * https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/
 * https://medium.com/technoetics/difference-between-null-undefined-and-not-defined-in-javascript-3a52a62894b
 * 
 * Find Type of undefined and null
 */
var a, b;
var c = undefined;
console.log(a, b, c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);