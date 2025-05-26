// log string
console.log('This is a console program')

// log numbers (decimals and integers)
console.log(45)
console.log(45.67)
console.log(-1)

// log boolean
console.log(true)

// log condition (loose equality)
console.log('32' == 32)

// log condition (strict equality)
console.log('32' === 32)

// log error
console.error('This is an error')

// log warning
console.warn('This is a warning')

const age = 32
console.log(age)

// log array
const sections = ['A', 'B', 'C', 'D']
console.log(sections)

// log object
const person = { firstName: 'John', lastName: 'Doe' }
console.log(person)
console.log(`Log a plain object: ${person}`) // [object object]
console.log(`Log an object with template string: ${JSON.stringify(person)}`)

// log object in tabular format
const student = { firstName: 'John', class: '5th' }
console.table(student)

// log array of objects
const students = [
  { firstName: 'Manish', lastName: 'Sajandasani' },
  { firstName: 'Kailash', lastName: 'Chhatani' }
]
console.log(students)
console.table(students)
console.log(`Log array of objects: ${students}`) // [object object], [object object]
console.log(`Log array of objects: ${JSON.stringify(students)}`)

// styled logs
const styles = 'color: red font-weight: bold font-size: 22px'
console.log('%cI am a long life learner', styles)

// group logs
console.group('logGroup')
console.log('Manish');
console.log(32);
console.log(`isMarried: ${true}`);
console.groupEnd('logGroup')

// calculate time logs
console.time('startTime')
let sum = 0;
for (let i = 1; i <= 1000000; i++) {
  sum += i;
}
console.log(`Total is ${sum}`);
console.timeEnd('startTime')