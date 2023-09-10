/**
 * When using declarations, you can invoke the function before the declaration.
 * With expressions, you can not.
 */

// Function Declaration
console.log(addDollarSign(20));
function addDollarSign(value) {
    return '$' + value;
}
console.log(addDollarSign(30));

// Function Expression
// Uncaught ReferenceError: Cannot access 'addPlusSign' before initialization
// console.log(addPlusSign(200));
const addPlusSign = function (value) {
    return '+' + value;
};
console.log(addPlusSign(40));
