// Log number
console.log(500);
console.log(51.5);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true, ['aa', 'bb', 'cc'], { a: 1, b: 2});

// Log variable
const x = 100;
console.log(x);

// Log variable with a string using concatenation
const myName = "Manish";
console.log("My name is " + myName);

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

// Log Array as Table
console.table([1, 2, 3]);

// Log Object
console.log({ name: 'Sanjay', email: 'sanjay@gmail.com' });

// Log Object as Table
console.table({ name: 'Sanjay', email: 'sanjay@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Find Execution Time of console commands
console.time('simple');
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.timeEnd('simple');

// Add CSS to Logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
