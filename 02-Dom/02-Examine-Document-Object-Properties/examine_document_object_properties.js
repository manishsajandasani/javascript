let output;
let style = 'color: yellow;'

console.log("%c==== document.all is deprecated ====", style);
// output = document.all;
// console.log(output);
// output = document.all[11];
// console.log(output);
// output = document.all.length;
// console.log(output);

console.log("%c==== Everything in the html tags ====", style);
// output = document.documentElement;
// console.log(output);

console.log("%c==== Head and body tags ====", style);
// output = document.head;
// console.log(output);
// output = document.body;
// console.log(output);

console.log("%c==== HTMLCollection of everything in head/body ====", style);
// output = document.head.children;
// console.log(output);
// output = document.body.children;
// console.log(output);

console.log("%c==== Random properties ====", style);
// output = document.doctype;
// console.log(output);
// output = document.domain;
// console.log(output);
// output = document.URL;
// console.log(output);
// output = document.characterSet;
// console.log(output);
// output = document.contentType;
// console.log(output);

console.log("%c==== Get all forms ====", style);
// output = document.forms;
// console.log(output);
// output = document.forms[0];
// console.log(output);
// output = document.forms[0].id;
// console.log(output);
// output = document.forms[0].method;
// console.log(output);
// output = document.forms[0].action;
// console.log(output);

console.log("%c==== Change a form id ====", style);
// document.forms[0].id = 'new-id';
// output = document.forms[0];
// console.log(output);

console.log("%c==== Get all links ====", style);
// output = document.links;
// console.log(output);
// output = document.links[0];
// console.log(output);
// output = document.links[0].href;
// console.log(output);
// output = document.links[0].href = 'https://facebook.com';
// console.log(output);
// output = document.links[0].id = 'google-link';
// console.log(output);
// output = document.links[0].className = 'google-class';
// console.log(output);
// output = document.links[0].classList;
// console.log(output);

console.log("%c==== Get all images ====", style);
// output = document.images;
// console.log(output);
// output = document.images[0];
// console.log(output);
// output = document.images[0].src;
// console.log(output);

console.log("%c==== Turn an HTMLCollection into an array ====", style);
// const forms = Array.from(document.forms);
// console.log(forms);
// forms.forEach((form) => console.log(form));
