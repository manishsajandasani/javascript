// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
for (const item of items) {
  console.log(item);
}

// Loop through array of objects
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];
for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'MANISH';
for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('qualification', "Post Graduate");
for (const [key, value] of map) {
  console.log(key, "===", value);
}
