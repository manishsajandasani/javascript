// Area of triangle when base and height is known
const base = 5;
const height = 10;
const area = (base * height) / 2;
console.log(`The area when base & height are known is ${area}`);

// Area of triangle when all three sides are known
const a = 3;
const b = 6;
const c = 7;

// calculate semi-perimeter and area
const s = (a + b + c) / 2;
const areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`The area when sides are known is ${areaValue}`);
