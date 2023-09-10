/**
 * What are Events?
 * Find.
 */

/**
 * With addEventListener() method you can put as many events as you want on a single item.
 */

/**
 * 3 Ways to Remove Children
 */

/**
 * If you wish to use an element multiple times in your script consider storing it into a variable and put it in the global scope.
 * If not just use it directly. No need to store it always in the variable.
 */

/**
 * setTimeout() is an Asynchronous Function
 */

const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  
  // 1. itemList.innerHTML = '';
  
  // 2. items.forEach((item) => item.remove());
  
  // 3.
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
clearBtn.onclick = function () {
  alert('Clear Items');
};

clearBtn.onclick = function () {
  console.log('Clear Items');
};

// addEventListener() with Anonymous Arrow Function
clearBtn.addEventListener('click', () => alert('Clear Items'));

// addEventListener() with with named function (Just pass the function name without parenthesis)
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);
