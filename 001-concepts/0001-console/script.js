console.log('This is a console program');
console.log(45);
console.log(45.67);
console.log(true);
console.log(-1);
console.log('32' == 32);
console.log('32' === 32);

console.error('This is an error');

console.warn('This is a warning');

const age = 32;
console.log(`Log a variable: ${age}`);

const sections = ['A', 'B', 'C', 'D'];
console.log(`Log an array: ${sections}`);

const person = { firstName: 'John', lastName: 'Doe' };
console.log(person);
console.table(person);
console.log(`Log a plain object: ${person}`);
console.log(`Log an object: ${JSON.stringify(person)}`);

const students = [
  { firstName: 'Manish', lastName: 'Sajandasani' },
  { firstName: 'Kailash', lastName: 'Chhatani' }
];
console.log(students);
console.table(students);
console.log(`Log array of objects: ${students}`);
console.log(`Log array of objects: ${JSON.stringify(students)}`);

const styles = 'color: red; font-weight: bold; font-size: 22px;';
console.log('%cI am a long life learner', styles);