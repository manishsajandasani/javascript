let x;

console.log("======== Creating an Object ========");
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  isFaculty: false,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};
console.log(person);

console.log("======== Accessing object properties with Dot and Bracket Notation ========");
x = person.name;
console.log(x);
x = person['age'];
console.log(x);
x = person.address.state;
console.log(x);
x = person.hobbies[0];
console.log(x);

console.log("======== Updating properties ========");
person.name = 'Rohan Preet';
person['isAdmin'] = false;
console.log(person);

console.log("======== Delete properties ========");
delete person.age;
console.log(person);

console.log("======== Create new properties ========");
person.hasChildren = true;
console.log(person);

console.log("======== Add Methods ========");
person.greet = function () { 
  return `Hello, my name is ${this.name}`;
};
console.log(person);
console.log(person.greet());

console.log("======== Keys with multiple words ========");
const person2 = {
  first_name: 'Manish',
  'last name': 'Sajandasani',
};
x = person2.first_name;
console.log(x);
x = person2['last name'];
console.log(x);
