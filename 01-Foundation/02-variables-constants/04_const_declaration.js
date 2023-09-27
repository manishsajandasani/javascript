let style = "color: yellow";
console.log("%c==== Use of `const` Keyword ====", style);

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
myArr.push(6, 7, true);
console.log(myArr);

const person = {
  name: 'Manish',
};
person.name = 'Sanjay';
person.email = 'msajan@gmail.com';
console.log(person);


/**
 * Below lines will result in error
 * hisAge = 30;
 * const hisAge = 90;
 * const myArr = [1, 2, 3, 4, 5, 6, 7, true];
 * myArr = [1, 2, 3, 4, 5, 6, 7, true];
 * const person = {
    name: 'Sanjay',
    email: 'msajan@gmail.com'
   }
 * person = {
 *  name: 'Sanjay',
 *  email: 'msajan@gmail.com'
 * };
 */