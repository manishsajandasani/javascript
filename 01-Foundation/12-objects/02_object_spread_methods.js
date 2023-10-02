let x;

console.log("======== Create object using the object constructor ========");
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x = todo;
console.log(x);

console.log("======== Object Nesting ========");
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};
x = person.address.coords.lat;
console.log(person);
console.log(x);

console.log("======== Spread operator ========");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log("======== Same as using ... ========");
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

console.log("======== Array of objects ========");
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];
console.log(todos);
x = todos[0].name;
console.log(x);

console.log("======== Get array of object keys ========");
x = Object.keys(todo);
console.log(x);
x = Object.keys(todos);
console.log(x);
x = Object.keys(todos[0]);
console.log(x);

console.log("======== Get length of an object ========");
x = Object.keys(todo).length;
console.log(x);

console.log("======== Get array of object values ========");
x = Object.values(todo);
console.log(x);

console.log("======== Get array of object key/value pairs ========");
x = Object.entries(todo);
console.log(x);

console.log("======== Check if object has a property ========");
x = todo.hasOwnProperty('age');
console.log(x);