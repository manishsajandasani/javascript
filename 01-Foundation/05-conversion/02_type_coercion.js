let x;

console.log("======== Coerced to a string ========");
x = 5 + '5';
console.log(x, typeof x);
x = 5 + Number('5');
console.log(x, typeof x);

console.log("======== Coerced to a number ========");
x = 5 * '5';
console.log(x, typeof x);

console.log("======== null is coerced to 0 as it is a `falsy` value ========");
x = 5 + null;
console.log(x, typeof x);
x = Number(null);
console.log(x, typeof x);
x = Number(true);
console.log(x, typeof x);
x = Number(false);
console.log(x, typeof x);

console.log("======== true is coerced to 1 ========");
x = 5 + true;
console.log(x, typeof x);

console.log("======== false is coerced to 0 (falsy) ========");
x = 5 + false;
console.log(x, typeof x);

console.log("======== Undefined is coerced to 0 (falsy) ========");
x = 5 + undefined;
console.log(x, typeof x);
