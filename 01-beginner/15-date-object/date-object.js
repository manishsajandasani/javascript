// 1. Create a new Date object (Current Date & Time)
const now = new Date();
console.log('Current Date & Time:', now);

// 2. Create Date from string
console.log('From ISO String:', new Date("2025-05-29T10:30:00"));
console.log('From ISO String:', new Date("05/29/2025 10:30:00"));
console.log('From ISO String:', new Date("05-29-2025"));
console.log('From ISO String:', new Date("2025-05-29"));

// 3. Create Date using year, month (0-based), day, hour, minute, second
const specificDate = new Date(2023, 11, 25, 14, 30, 0); // Mon Dec 25 2023 14:30:00 GMT+0530 (India Standard Time)
console.log('Specific Date:', specificDate);

// 4. Create Date from timestamp (milliseconds since Jan 1, 1970)
const fromTimestamp = new Date(1672502400000); // Dec 31, 2022
console.log('From Timestamp:', fromTimestamp);

// 5. Get timestamp from date
console.log('Timestamp (ms since 1970):', now.getTime());

// 6. Get current timestamp
console.log('Current Timestamp:', Date.now());

// 7. Get individual components
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth()); // 0 = Jan, 11 = Dec
console.log('Date:', now.getDate()); // Day of month
console.log('Day (0-6):', now.getDay()); // 0 = Sunday, 6 = Saturday
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());

// 8. Set components
now.setFullYear(2030);
now.setMonth(0); // January
now.setDate(1);
console.log('Modified Date:', now);

// // 9. Convert to readable string
// console.log('toString():', now.toString()); // Full string with timezone
// console.log('toDateString():', now.toDateString()); // Only date
// console.log('toTimeString():', now.toTimeString()); // Only time
// console.log('toISOString():', now.toISOString()); // Standard ISO format
// console.log('toLocaleString():', now.toLocaleString()); // Local format
// console.log('toLocaleDateString():', now.toLocaleDateString()); // Local date only
// console.log('toLocaleTimeString():', now.toLocaleTimeString()); // Local time only

// // 10. Parse date string into timestamp
// const parsedTime = Date.parse("2025-12-31T23:59:59");
// console.log('Parsed Timestamp:', parsedTime);
// console.log('Parsed Date:', new Date(parsedTime));

// // 11. Compare two dates
// const date1 = new Date("2024-01-01");
// const date2 = new Date("2025-01-01");
// console.log('Is date2 > date1?', date2 > date1); // true

// // 12. Date difference (in days)
// const diffInMs = date2.getTime() - date1.getTime();
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log('Days between:', diffInDays);

// // 13. Add days to a date
// const futureDate = new Date();
// futureDate.setDate(futureDate.getDate() + 10); // Add 10 days
// console.log('10 Days Later:', futureDate);

// // 14. Handle UTC vs Local
// console.log('Local Hour:', now.getHours());
// console.log('UTC Hour:', now.getUTCHours());

// // 15. Get timezone offset (in minutes)
// console.log('Timezone Offset (minutes from UTC):', now.getTimezoneOffset());
