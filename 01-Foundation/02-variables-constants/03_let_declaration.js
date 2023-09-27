let style = "color: yellow";
console.log("%c==== Use of `let` Keyword ====", style);

/** ====================================================================
 * let
 * Can be declared without assigning a value
 * Can be assigned a value later
 * Can be re-assigned a value
 * Can be declared and assigned at a time
 * Can't be re-declared
 */

let yourAge;
yourAge = 23;
yourAge = 27;
let myAge = 30;

/**
 * Below line will result in error (Can't be re-declared)
 * SyntaxError: Identifier 'yourAge' has already been declared
 * let yourAge;
 * var yourAge;
 * const yourAge;
*/

