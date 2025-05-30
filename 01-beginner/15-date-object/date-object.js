/**
    Whether the JavaScript Date object is always one day off. The short answer is: No, it’s not always one day off, but it can sometimes seem that way due to time zone differences.

    Why It Happens
    JavaScript Date objects use the local time zone of the browser by default (or UTC if specified). So if you create a date without a time:    
    const date = new Date('2025-05-30');
    
    JavaScript will interpret this as midnight in UTC, and then convert it to your local time. If your local time is behind UTC (like in the US), the local date might be the previous day. That’s why it looks like it’s one day off.

    const date = new Date('2025-05-30'); 
    console.log(date.toISOString()); // 2025-05-30T00:00:00.000Z
    console.log(date.toString());    // Thu May 29 2025 20:00:00 GMT-0400 (Eastern Daylight Time)
    So in local time (Eastern), it’s actually May 29, not May 30.

    How to Avoid This
    ✅ Always be clear about time zones.
    ✅ Use Date.UTC if you’re dealing with UTC dates.
    ✅ Use libraries like Luxon or date-fns for better time zone handling.

    TL;DR:
    JavaScript’s Date isn’t always one day off—it’s just that time zone conversions can make it seem like that.
 */


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
console.log('Milliseconds:', now.getMilliseconds());
console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);

// 8. Set components
now.setFullYear(2030);
now.setMonth(0); // January
now.setDate(1);
console.log('Modified Date:', now);

// 9. Convert to readable string
console.log('toString():', now.toString()); // Full string with timezone
console.log('toDateString():', now.toDateString()); // Only date
console.log('toTimeString():', now.toTimeString()); // Only time
console.log('toISOString():', now.toISOString()); // Standard ISO format
console.log('toLocaleString():', now.toLocaleString()); // Local format
console.log('toLocaleDateString():', now.toLocaleDateString()); // Local date only
console.log('toLocaleTimeString():', now.toLocaleTimeString()); // Local time only

// 10. Parse date string into timestamp
const parsedTime = Date.parse("2025-12-31T23:59:59");
console.log('Parsed Timestamp:', parsedTime);
console.log('Parsed Date:', new Date(parsedTime));

// 11. Compare two dates
const date1 = new Date("2024-01-01");
const date2 = new Date("2025-01-01");
console.log('Is date2 > date1?', date2 > date1); // true

// 12. Date difference (in days)
const diffInMs = date2.getTime() - date1.getTime();
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log('Days between:', diffInDays);

// 13. Add days to a date
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10); // Add 10 days
console.log('10 Days Later:', futureDate);

// 14. Handle UTC vs Local
console.log('Local Hour:', now.getHours());
console.log('UTC Hour:', now.getUTCHours());

// 15. Get timezone offset (in minutes)
console.log('Timezone Offset (minutes from UTC):', now.getTimezoneOffset());

// 16. One Day Off
const date = new Date('2025-05-30T00:00:00Z'); // Create a Date object in explicit UTC
console.log("UTC time:", date.toUTCString()); // Show date in UTC
console.log("Local time:", date.toString()); // Show date in local time (local timezone)

// 17. To show in a different timezone, use toLocaleString with timeZone option:
const options = {
    timeZone: 'America/New_York', // Eastern Time
    timeZoneName: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};

const nyTime = date.toLocaleString('en-US', options);
console.log("New York time:", nyTime);

const indiaTime = date.toLocaleString('en-IN', {
    ...options,
    timeZone: 'Asia/Kolkata',
});
console.log("India time:", indiaTime);

// 18. Intl.DateTimeFormat API (Locale Specific)
const d = new Date();
console.log('America Date Format:', Intl.DateTimeFormat('en-US').format(d)); // This formats the date d in the US English locale style.
console.log('England Date Format:', Intl.DateTimeFormat('en-GB').format(d)); // This does it for British English style (day/month/year instead of month/day/year).
console.log('Default Format:', Intl.DateTimeFormat('default').format(d)); // This uses the default locale of the browser (whatever language the browser is set to).
console.log('Long Month Format:', Intl.DateTimeFormat('default', { month: 'long' }).format(d)); // This gets the month name in full (e.g., "May" or "December") in the default locale.
console.log('Short Month Format:', d.toLocaleString('default', { month: 'short' })); // This shows the short form of the month (like "May" instead of "May 2025").

console.log(d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
}));

console.log(d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Kolkata',
}));