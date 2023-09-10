// Global window object
console.log(window);

// The document object is part of the window object
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

// We also have methods to select elements more directly
document.getElementById('main2').innerHTML = '<h2>Hello from main</h2>';
document.querySelector('#main h1').innerText = 'Hi! There.';

// We can set properties of elements
document.body.innerHTML = '<h1>Hello from body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS');


