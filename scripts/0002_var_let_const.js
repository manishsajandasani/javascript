// 4 Ways to Declare a Variable
// automatic, `var`, `let`, & `const`
var firstName = 'John';
let age = 30;
const PET_NAME = 'Tommy';

/** ====================================================================
 * var
 * Can be declared without assigning a value
 * Can be assigned a value later
 * Can be re-assigned a value
 * Can be re-declared
 */
var myAge;
myAge = 30;
myAge = 35;
var myAge = 45;
myAge = 48;

/** ====================================================================
 * let
 * Can be declared without assigning a value
 * Can be assigned a value later
 * Can be re-assigned a value
 * Can't be re-declared
 */
let yourAge;
yourAge = 23;
yourAge = 27;
/**
 * Below line will result in error
 * let yourAge;
 */

/** ====================================================================
 * const
 * Have to be declared and assigned a value at the same time
 * Can't be declared without assigning a value
 * Can't be assigned a value later
 * Can't be re-assigned a value
 * Can't be re-declared
 * We can still manipulate arrays and objects using const
 */
const hisAge = 50;

const myArr = [1, 2, 3, 4, 5];
// myArr = [1, 2, 3, 4, 5, 6, 7, true];
myArr.push(6, 7, true);
console.log(myArr);

const person = {
  name: 'Manish',
};
person.name = 'Sanjay';
person.email = 'msajan@gmail.com';

// person = {
//   name: 'Sanjay',
//   email: 'msajan@gmail.com'
// };

console.log(person);

/**
 * Below lines will result in error
 * hisAge = 30;
 * const hisAge = 90;
 * const myArr = [1, 2, 3, 4, 5, 6];
 * const person = {
    name: 'Sanjay',
    email: 'msajan@gmail.com'
   }
 */
