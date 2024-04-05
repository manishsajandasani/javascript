const itemInput = document.querySelector('#item-input');
const itemForm = document.querySelector('#item-form');
const formBtn = document.querySelector('.btn');
const itemList = document.querySelector('#item-list');
const clear = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');
const addEditBtn = document.querySelector('#add-edit-btn');
let isEditMode = false;

function clearAll(e) {
    // 1.
    // Loop through all LIs of UL and remove them

    // 2.
    // itemList.innerHTML = '';

    // 3.
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    localStorage.removeItem('items');

    checkUI();
}

function onItemClick(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        const itemToBeRemoved = e.target.parentElement.parentElement;
        removeItem(itemToBeRemoved);
        removeItemFromStorage(itemToBeRemoved.firstChild.textContent);
        checkUI();
    } else {
        itemToEdit(e.target);
    }
}

function removeItem(item) {
    item.remove();
}

function removeItemFromStorage(removableItem) {
    let items = getItemsFromStorage();
    let newItemsList = items.filter(item => item !== removableItem);
    localStorage.setItem('items', JSON.stringify(newItemsList));
}

function itemToEdit(item) {
    isEditMode = true;

    const itemText = item.textContent;
    itemList.querySelectorAll('li').forEach(li => li.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    addEditBtn.innerHTML = `<i class='fa-solid fa-pen'></i> Edit Item`;
    addEditBtn.style.background = '#228b22';
    itemInput.value = itemText;
}

function addItem(e) {
    e.preventDefault();

    if (isEditMode) {
        const textToBeEdited = document.querySelector('.edit-mode');
        removeItemFromStorage(textToBeEdited.textContent);
        textToBeEdited.classList.remove('edit-mode');
        
        // ---------------- ToDo Code
    }

    // addItemToUI();
    // addItemToStorage();
    
    // checkUI();
    
    // itemInput.focus();
    // itemInput.value = '';
}

function addItemToUI() {
    if (itemInput.value === '') {
        alert('Enter an item first');
        return;
    }

    createListItem(itemInput.value);
}

function createListItem(value) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(value));

    const theBtn = createListItemBtn();

    li.appendChild(theBtn);
    itemList.appendChild(li);
}

function createListItemBtn() {
    const btn = document.createElement('button');
    btn.className = 'remove-item btn-link text-red';

    const theIcon = createListItemBtnIcon();
    btn.appendChild(theIcon);

    return btn;
}

function createListItemBtnIcon() {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    return icon;
}

function checkUI(e) {
    const items = getItemsFromStorage();
    if (items.length === 0) {
        itemFilter.style.display = 'none';
        clear.style.display = 'none';
    } else {
        itemFilter.style.display = 'block';
        clear.style.display = 'block';
    }
}

function filterItems(e) {
    const items = document.querySelectorAll('#item-list li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

function getItemsFromStorage() {
    let storageItems;
    if (localStorage.getItem('items') === null) {
        storageItems = [];
    } else {
        storageItems = JSON.parse(localStorage.getItem('items'));
    }
    return storageItems;
}

function addItemToStorage() {
    let items = getItemsFromStorage();
    items.push(itemInput.value);
    localStorage.setItem('items', JSON.stringify(items));
}

function displayItems() {
    let items = getItemsFromStorage();
    if (items.length > 0) {
        items.forEach(item => createListItem(item));     
    }
}

function init() {
    itemForm.addEventListener('submit', addItem);
    itemList.addEventListener('click', onItemClick);
    clear.addEventListener('click', clearAll);
    filter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', checkUI);
    document.addEventListener('DOMContentLoaded', displayItems);
}

init();