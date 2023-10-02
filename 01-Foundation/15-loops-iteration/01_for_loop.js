// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITIAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Number ' + i);
  }
}

// Nested loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];
for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}

/**
 * For Loop Exercises
 * 1. Write a program to display the first 10 natural numbers.
      Expected Output : 1 2 3 4 5 6 7 8 9 10
 * 2. Write a program to compute the sum of the first 10 natural numbers.
      Expected Output : 1 2 3 4 5 6 7 8 9 10 => The sum is 55
 * 3. Write a program to display n terms of natural numbers and their sum.
      The first 7 natural numbers are : 1 2 3 4 5 6 7
      The Sum of Natural Number upto 7 terms : 28
 * 4. Write a program to display the cube of the number up to an integer.
      Input number of terms : 5
      Expected Output :
      Number is : 1 and cube of the 1 is :1
      Number is : 2 and cube of the 2 is :8
      Number is : 3 and cube of the 3 is :27
      Number is : 4 and cube of the 4 is :64
      Number is : 5 and cube of the 5 is :125
 * 5. Write a program to display the multiplication table for a given integer.
      Test Data :
      Input the number (Table to be calculated) : 15
      Expected Output :
      15 X 1 = 15
      ...
      ...
      15 X 10 = 150
 */