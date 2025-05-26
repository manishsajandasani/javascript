/**
 * camelCase: Starts with a lowercase letter, and subsequent words start with an uppercase letter. Ex: firstName, calculateTotalPrice, isUserLoggedIn
 * Standard for variable names, function names, and property names.
 */
const camelCaseVariable = 10;
console.log(`camelCaseVariable = ${camelCaseVariable}`);

/**
 * PascalCase: The first letter of every word is capitalized, including the very first word. Ex: UserName, ProductDetails, MyComponent
 * Standard for class names, constructor functions, and React component names.
 */
const PascalCaseVariable = 20;
console.log(`PascalCaseVariable = ${PascalCaseVariable}`);

/**
 * snake_case: All letters are lowercase, and words are separated by underscores (_). Ex: user_id, total_price, is_admin
 * Not typically used for JavaScript variables. More common in Python, Ruby, and sometimes for constants in C/C++/Java (MAX_VALUE).
 *  While valid, it's generally avoided for standard JS variables to maintain consistency with the community's camelCase preference.
 */
const snake_case_variable = 30;
console.log(`snake_case_variable = ${snake_case_variable}`);

/**
 * SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE): All letters are uppercase, and words are separated by underscores (_). Ex: MAX_USERS, PI_VALUE, API_KEY
 * Standard for global constants whose values are truly immutable and known at compile time. Used for const declarations that represent unchanging values across the application.
 */
const UPPER_SNAKE_CASE_VARIABLE = 40;
console.log(`UPPER_SNAKE_CASE_VARIABLE = ${UPPER_SNAKE_CASE_VARIABLE}`)

/**
 * kebab-case: All letters are lowercase, and words are separated by hyphens (-). Not valid for JavaScript variable names directly. Ex: user-name, total-items
 * Not valid for JavaScript variable names directly. It's commonly used in CSS property names, HTML attributes, and sometimes for file/folder names.
 * If you try to use let user-name = "John"; it will be interpreted as user minus name, leading to a SyntaxError.
 */


/**
 * Rules for Identifiers:
 * Must start with a letter (a-z, A-Z), an underscore (_), a dollar sign ($)
 * Can contain letters, digits, underscores, and dollar signs after the first character
 * Case-Sensitive: myVar is different from MyVar and myvar
 * Cannot start with a number
 * Cannot contain special characters
 * Cannot use spaces between words
 * Cannot use reserved keywords like function, let, class, etc.
 
 * Valid Names: name, age, firstName, _privateVar, $element, userCount, item1, total_sum, MAX_ATTEMPTS
 * Invalid Names: 1stUser, 0Name, await, null, package, user-name, my@email.com, user name
 */