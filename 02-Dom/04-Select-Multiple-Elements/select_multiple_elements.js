let style = 'color: yellow';

console.log("%c==== querySelectorAll() - Returns a NodeList ====", style);
const listItems = document.querySelectorAll('.item');
console.log(listItems);

console.log("%c==== Convert NodeList into Array ====", style);
console.log(Array.from(listItems));
listItems.forEach(li => console.log(li));

console.log("%c==== Access elements by index ====", style);
console.log(listItems[1].innerText);

console.log("%c==== Setting a color for specific element ====", style);
listItems[1].style.color = 'red';
console.log(listItems[1]);

console.log("%c==== We can use forEach() on a NodeList ====", style);
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }
  
  if (index === 0) {
    item.innerHTML = `Bananas
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
  
  console.log(item);
});

console.log("%c==== getElementsByClassName() - Returns an HTMLCollection ====", style);
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

console.log("%c==== getElementsByTagName() ====", style);
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);
console.log(listItems3[0].innerText);
Array.from(listItems3).forEach((item) => {
  console.log(item.innerText);
});