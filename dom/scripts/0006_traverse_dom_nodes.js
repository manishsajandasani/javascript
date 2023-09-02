let output;
let style = "color: yellow";

console.log("%c==== Get child nodes ====", style);
const parent = document.querySelector('.parent');
output = parent.childNodes;
console.log(output);
output = parent.childNodes[0].textContent;
console.log(output);
output = parent.childNodes[0].nodeName;
console.log(output);
output = parent.childNodes[3].textContent;
console.log(output);
output = parent.childNodes[3].outerHTML;
console.log(output);

output = parent.childNodes[3].innerText = 'Child One';
console.log(output);
output = parent.childNodes[5].style.color = 'red';
console.log(output);

output = parent.firstChild;
console.log(output);
output = parent.lastChild;
console.log(output);
parent.lastChild.textContent = 'Hello';

console.log("%c==== Get parent node ====", style);
const child = document.querySelector('.child');
output = child.parentNode;
console.log(output);
output = child.parentElement;
console.log(output);
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

console.log("%c==== Get sibling nodes ====", style);
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
console.log(output);
output = secondItem.previousSibling;
console.log(output);
