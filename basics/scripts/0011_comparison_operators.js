console.log("======== Equal ========");
var x = 10;
var y = 10;
var z = "10";
console.log(x == y ? "Yes" : "No");
console.log(x == z ? "Yes" : "No");

console.log("======== Identical ========");
var x = 10;
var y = 10;
var z = "10";
console.log(x === y ? "Yes" : "No");
console.log(x === z ? "Yes" : "No");

console.log("======== Not Equal ========");
var x = 10;
var y = 20;
var z = "10";
var a = "15";
console.log(x != y ? "Yes" : "No");
console.log(x != z ? "Yes" : "No");
console.log(x != a ? "Yes" : "No");

console.log("======== Not Identical ========");
var x = 10;
var y = 20;
var z = "10";
var a = "15";
var b = 10;
console.log(x !== y ? "Yes" : "No");
console.log(x !== z ? "Yes" : "No");
console.log(x !== a ? "Yes" : "No");
console.log(x !== b ? "Yes" : "No");

console.log("======== Greater Than ========");
var x = 20;
var y = 10;
var z = "18";
var a = 18;
console.log(x > y ? "Yes" : "No");
console.log(x > z ? "Yes" : "No");
console.log(x > a ? "Yes" : "No");

console.log("======== Less Than ========");
var x = 20;
var y = 10;
var z = "25";
var a = 21;
console.log(x < y ? "Yes" : "No");
console.log(x < z ? "Yes" : "No");
console.log(x < a ? "Yes" : "No");

console.log("======== Greater Than or Equal To ========");
var x = 20;
var y = 10;
var z = "20";
var a = 21;
console.log(x >= y ? "Yes" : "No");
console.log(x >= z ? "Yes" : "No");
console.log(x >= a ? "Yes" : "No");

console.log("======== Less Than or Equal To ========");
var x = 20;
var y = 10;
var z = "20";
var a = 21;
console.log(x <= y ? "Yes" : "No");
console.log(x <= z ? "Yes" : "No");
console.log(x <= a ? "Yes" : "No");

console.log("All Comparison Operators can also be used on strings");
console.log("A" < "B");
console.log("A" == "B");
console.log("20" < "5");
console.log("10" > "B");