// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
const x = 50;
console.log(x, 'in global');
function run() {
    // Access global vars in functions
    console.log(window.innerWidth);
    console.log(x, 'in function');
}
run();

// Access global vars in blocks
if (true) {
    console.log(x, 'in block');
}

function add() {
    // Overwriting global x (variable shadowing)
    const x = 1;
    const y = 50;
    console.log(x + y);
}
add();

// Can not access a function scoped variable in global scope
// 0030_fnc_global_scope.js:28 Uncaught ReferenceError: y is not defined
console.log(y);
