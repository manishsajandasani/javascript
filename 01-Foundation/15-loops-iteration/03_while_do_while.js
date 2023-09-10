let i = 0;
while (i <= 5) {
  console.log('Number ' + i);
  i++;
}

// Loop over arrays
let j = 0;
const arr = [10, 20, 30, 40, 50];
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// Nesting while loops
let k = 0;
while (k <= 5) {
  console.log('Number ' + k);
  let l = 1;
  while (l <= 3) {
    console.log(`${k} * ${l} = ${k * l}`);
    l++;
  }
  k++;
}

// Do While Loop - Always runs once
let m = 0
do {
  console.log('Num ' + m);
  m++;
} while (m <= 3);
