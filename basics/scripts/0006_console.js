// Log number
console.log(500);
console.log(51.5);

// Log string
console.log('Hello World');
console.log("Hello World");
console.log(`Hello World`);

// Log multiple values
console.log(20, 'Hello', true, ['aa', 'bb', 'cc'], { a: 1, b: 2});

// Log variable
const x = 100;
console.log(x);

// Log Anything
console.log("I am Manish");
console.log(20);
console.log(20 + 20);
console.log(20 / 10);
console.log(20 % 3);
console.log("Hello" + 30);
console.log("Hello" + 30 + "ABCD" + 50);
console.log(null);
console.log(undefined);
console.log(true);

// Log variable with a string using concatenation
const myName = "Manish";
console.log("My name is      " + myName);

// Log variable with a string using Template Literals
const yourName = "Sanjay";
const designation = "Full Stack Developer";
console.log(`Your name is ${yourName}`);
console.log(`I
  AM A
       ${designation}!
`)

// Log Error
console.error('Alert');

// Log Warning
console.warn('Warning');

// Log Array
console.log([1, 2, 3]);
console.log(["A", 23, false, null, undefined]);

// Log Array as Table
console.table([1, 2, 3]);
console.table(["A", 23, false, null, undefined]);

// Log Object
console.log({ name: 'Sanjay', email: 'sanjay@gmail.com' });

// Log Object as Table
console.table({ name: 'Sanjay', email: 'sanjay@gmail.com' });

// Group console commands
console.group('groupme');
console.log(x);
console.table(["A", 23, false, null, undefined]);
console.table({ 1: "A", 2: "B", 3: "C" });
console.error("This is error");
console.warn("This is warning");
console.groupEnd('groupme');

// Find Execution Time of console commands
console.time('simple');
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.timeEnd('simple');

// Add CSS to Logs
let fontSize = "10px";
let styles = `font-size:${fontSize}; padding: 15px; border: 2px solid green;`;
console.log("%cI am a Full Stack Developer", styles);

// Clear Console
console.clear();
