// Log String
console.log('This is a console program');

// Log Numbers (Decimals and Integers)
console.log(45);
console.log(45.67);
console.log(-1);

// Log Boolean
console.log(true);

// Log Condition (Loose Equality)
console.log('32' == 32);

// Log Condition (Strict Equality)
console.log('32' === 32);

// Log Error
console.error('This is an error');

// Log Warning
console.warn('This is a warning');

// Log Variable
const age = 32;
console.log(age);

// Log Array
const sections = ['A', 'B', 'C', 'D'];
console.log(sections);

// Log Object
const person = { firstName: 'John', lastName: 'Doe' };
console.log(person);
console.log(`Log a plain object: ${person}`); // [object object]
console.log(`Log an object with template string: ${JSON.stringify(person)}`);

// Log Object in Tabular Format
const student = { firstName: 'John', class: '5th' };
console.table(student);

// Log Array of Objects
const students = [
  { firstName: 'Manish', lastName: 'Sajandasani' },
  { firstName: 'Kailash', lastName: 'Chhatani' }
];
console.log(students);
console.table(students);
console.log(`Log array of objects: ${students}`); // [object object], [object object]
console.log(`Log array of objects: ${JSON.stringify(students)}`);

// Styled Logs
const styles = 'color: red font-weight: bold font-size: 22px';
console.log('%cI am a long life learner', styles);

// Group Logs
console.group('logGroup');
console.log('Manish');
console.log(32);
console.log(`isMarried: ${true}`);
console.groupEnd('logGroup');

// Calculate Time Logs
console.time('startTime');
let sum = 0;
for (let i = 1; i <= 1000000; i++) {
  sum += i;
}
console.log(`Total is ${sum}`);
console.timeEnd('startTime');