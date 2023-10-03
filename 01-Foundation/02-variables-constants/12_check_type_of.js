let style = "color: yellow";
console.log("%c==== Check typeof ====", style);

var a, b, c, d, e, f, g;
a = 10; // value is number and type is also number
b = 20; // value is number and type is also number
c = '30'; // // value is string and type is also string
d = {age: 31, myName: "Manish", married: true} // value is object and type is also object
e = null; // value is null but type is object (kind of error. Ex. e == d, e === d)
f = undefined; // value is undefined and type is also undefined
g = [1, true, "Honey", { one: 1, two: 2 }, undefined, null, NaN]; // value is array but type is object

console.log(typeof a == typeof b);
console.log(typeof a == typeof c);
console.log(typeof a == typeof d);
console.log(typeof a == typeof e);
console.log(typeof a == typeof f);
console.log(typeof e == typeof f);
console.log(typeof e == typeof d);
console.log(typeof e === typeof d);
console.log(typeof e);
console.log(typeof g);
console.log(typeof a === typeof g);
