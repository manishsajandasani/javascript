/**
 * Primitive Data Types
 * Stored Directly in the 'Stack', where it is accessed from
 * String | Number | Boolean | Null | Undefined | Symbol | BigInt
 * Changes in one variable do not affect the content of other variable.
 * 
 * Reference Data Types
 * Stored in the 'Heap' and accessed by Reference
 * Variable gets saved on stack but value gets saved on heap. Variable has the reference of the value.
 * Changes in one variable affect the content of other variable.
 * Arrays | Functions | Objects
 */

// Primitive Data Type
let myName = "Manish";
let yourName = myName;
console.log(myName, yourName);
yourName = "Sanjay";
console.log(myName, yourName);

// Reference Data Type
let person_1 = {
  name: "Suresh"
}
let person_2 = person_1;
console.log(person_1.name, person_2.name);
person_2.name = "Ramesh";
console.log(person_1.name, person_2.name);