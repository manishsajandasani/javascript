let output;
let style = "color: yellow";

console.log("%c==== Get child elements from a parent ====", style);
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

console.log("%c==== Get parent elements from a child ====", style);
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '3px solid #ccc';
child.parentElement.style.padding = '10px';
child.parentElement.style.marginTop= '20px';

console.log("%c==== Get sibling elements ====", style);
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'teal';
secondItem.previousElementSibling.style.color = 'green';
