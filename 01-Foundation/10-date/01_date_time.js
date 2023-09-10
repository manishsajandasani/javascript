let d;

// Get today's date and time
console.log("======== Today Date and Time ========");
d = new Date();
console.log(d);

// Set to a string
console.log("======== Set to String ========");
d = d.toString();
console.log(d);

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
console.log("======== Get Specific Date ========");
d = new Date(2021, 1, 10, 12, 30, 0);
console.log(d);

// Pass in a String
console.log("======== Pass in a String ========");
d = new Date('2021-07-10T12:30:00');
console.log(d);
d = new Date('07/10/2021 12:30:00');
console.log(d);
d = new Date('2022-07-10');
console.log(d);
d = new Date('07-10-2022');
console.log(d);

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
console.log("======== Date Now ========");
d = Date.now();
console.log(d);

// Get the timestamp of a specific date
console.log("======== Timestamp of Specific Date ========");
d = new Date();
console.log(d);
d = d.getTime();
console.log(d);
d = d.valueOf();
console.log(d);

// Create a date from a timestamp
console.log("======== Date from a Timestamp ========");
d = new Date(1693238159906);
console.log(d);

// Convert from milliseconds to seconds
console.log("======== Milliseconds to Seconds ========");
d = Math.floor(Date.now() / 1000);
console.log(d);

// Date Methods
console.log("======== toString() Method ========");
d = new Date();
x = d.toString();
console.log(x);

console.log("======== getTime() Method ========");
x = d.getTime();
console.log(x);

console.log("======== valueOf() Method ========");
x = d.valueOf();
console.log(x);

console.log("======== getFullYear() Method ========");
x = d.getFullYear();
console.log(x);

console.log("======== getMonth() Method ========");
x = d.getMonth();
console.log(x);
x = d.getMonth() + 1;
console.log(x);

console.log("======== getDate() Method ========");
x = d.getDate();
console.log(x);

console.log("======== getDay() Method ========");
x = d.getDay();
console.log(x);

console.log("======== getHours() Method ========");
x = d.getHours();
console.log(x);

console.log("======== getMinutes() Method ========");
x = d.getMinutes();
console.log(x);

console.log("======== getSeconds() Method ========");
x = d.getSeconds();
console.log(x);

console.log("======== getMilliseconds() Method ========");
x = d.getMilliseconds();
console.log(x);

console.log("======== Today ========");
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

// Intl.DateTimeFormat API (locale specific)
console.log("======== Intl.DateTimeFormat API (locale specific) ========");
x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);
x = Intl.DateTimeFormat('en-GB').format(d);
console.log(x);
x = Intl.DateTimeFormat('default').format(d);
console.log(x);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(x);
x = d.toLocaleString('default', { month: 'short' });
console.log(x);
x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});
console.log(x);

