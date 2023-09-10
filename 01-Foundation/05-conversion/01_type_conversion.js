// Convert string to number (Also try 100kl, kl100)
let amount = '100';
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

// Convert number to string
let amount2 = 100;
amount2 = amount2.toString();
amount2 = String(amount2);
console.log(amount2, typeof amount2);

// Convert string to decimal (Also try 100kl, kl100)
let amount3 = "500";
amount3 = parseFloat(amount3);
console.log(amount3, typeof amount3);

// Convert number to boolean
let amount4 = 56;
amount4 = Boolean(amount4);
console.log(amount4, typeof amount4);

let amount5 = 0;
amount5 = Boolean(amount5);
console.log(amount5, typeof amount5);

let amount6 = -10;
amount6 = Boolean(amount6);
console.log(amount6, typeof amount6);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
console.log('foo' - 3);
console.log(3 - 'foo');
console.log(3 * 'foo');

// Others
console.log(5 + 'foo');
console.log(3 / 0);
console.log(0 / 3);


