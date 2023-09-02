let style = 'color: yellow;'

console.log("%c==== document.getElementById() ====", style);
console.log(document.getElementById('app-title'));

console.log("%c==== Get attributes ====", style);
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(Array.from(document.getElementById('app-title').classList));
console.log(document.getElementById('app-title').getAttribute('id'));

console.log("%c==== Set attributes ====", style);
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');
console.log(title);

console.log("%c==== Get/change content ====", style);
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

console.log("%c==== Change styles ====", style);
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log("%c==== Use any CSS selector ====", style);
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';
console.log(secondItem);

console.log("%c==== Use these methods on other elements ====", style);
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'green';
