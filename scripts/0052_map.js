const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(numbers);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});
console.log(doubledNumbers2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyInfo);

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});
console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => number * number)
  .map((square) => square * 2);
console.log(squareAndDouble);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });
console.log(squareAndDouble2);

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter(person => person.age <= 25)
  .map(youngMan => ({
      name: `${youngMan.firstName} ${youngMan.lastName}`,
      email: youngMan.email
  }));
console.log(youngPeople);

const youngPeople2 = people
  .filter(person => person.age <= 25)
  .map(youngMan => {
    return {
      name: `${youngMan.firstName} ${youngMan.lastName}`,
      email: youngMan.email
    }
  });
console.log(youngPeople2);