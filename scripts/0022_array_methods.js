let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
console.log("======== push() method ========");
arr.push(100);
console.log(arr);

// pop() - Take the last value off
console.log("======== pop() method ========");
arr.pop();
console.log(arr);

// unshift() - Add a value to the beginning of the array
console.log("======== unshift() method ========");
arr.unshift(99);
console.log(arr);

// shift() - Remove first value
console.log("======== shift() method ========");
arr.shift();
console.log(arr);

// reverse() - Reverse an array
console.log("======== reverse() method ========");
arr.reverse();
console.log(arr);

// includes() - Check to see if something is in the array
console.log("======== includes() method ========");
x = arr.includes(445);
console.log(x);

// indexOf() - Return the index of the first match
console.log("======== indexOf() method ========");
x = arr.indexOf(28);
console.log(x);

// Return array as a string
console.log("======== toString() and join() method ========");
x = arr.toString();
console.log(x);
x = arr.join();
console.log(x);

// slice() returns selected elements in an array, as a new array.
// Slice takes in the index of the first element and the index of the last element to be included in the new array.
// It excludes the last index element
console.log("======== slice() method ========");
x = arr.slice(1, 4);
console.log(x, arr);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. 
// It also mutates the original array where slice() does not
console.log("======== splice() method ========");
x = arr.splice(3, 4);
console.log(x, arr);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
console.log("======== remove element(s) by splice method ========");
x = [10,20,30,40,50,60,70].splice(4, 3);
console.log(x);

// Chaining methods - Some methods can be chained depending on the return value.
console.log("======== chaining methods ========");
x = [1,2,3,4,5].slice(1, 4).reverse().toString().charAt(0);
console.log(x);