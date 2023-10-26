const x = 100;
// An If statement is a block
if (true) {
    console.log(x);
    // var y = 200;
    // let y = 200;
    const y = 200;
    console.log(x + y);
}
// ReferenceError: y is not defined
// console.log(y);

// A loop is a block
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// ReferenceError: i is not defined
// console.log(i);

// Using var
if (true) {
    const a = 500;
    let b = 600;
    var c = 721;
}
console.log(c);

// var is function scoped
function run() {
    var d = 143;
    console.log(d);
}
run();
// ReferenceError: d is not defined
// console.log(d);

const foo = 1;
var bar = 2; // Put on the window object
console.log(foo, bar);