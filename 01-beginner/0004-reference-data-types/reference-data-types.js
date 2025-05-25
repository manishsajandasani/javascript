const styles = 'color: red; font-weight: bold: font-size: 18px;'

// Array
const numbersArray = [1, 2, 3, 4, 5];
console.log('%cNumbers Array', styles)
console.log(numbersArray);
console.log(`Type of numbersArray is <${typeof numbersArray}>`);

const stringArray = ['A', 'B', 'C', 'D', 'E'];
console.log('%cString Array', styles)
console.log(stringArray);
console.log(`Type of stringArray is <${typeof stringArray}>`);

const mixedValuesArray = [1, 'Hello', true, null, undefined, { firstName: 'Manish', age: 32 }, [2025, 'Full Stack Development Course']];
console.log('%cMixed Values Array', styles)
console.log(mixedValuesArray);
console.log(`Type of mixedValuesArray is <${typeof mixedValuesArray}>`);

// Object
const studentObject = {
  name: 'Raja',
  class: '5',
  section: 'C',
  hobbies: ['Cricket', 'Chess', 'Reading'],
  favouriteSubject: 'Maths'
};
console.log('%cStudent Object', styles)
console.log(studentObject);
console.log(`Type of studentObject is <${typeof studentObject}>`);

// Function
function printNamaste() {
  console.log('Namaste!!');
}
console.log('%cprintNamaste Function', styles)
console.log(printNamaste);
console.log(`Type of printNamaste is not <${typeof printNamaste}> but <object>`);

/**
 * NOTE:
 * In JavaScript, the result of typeof for a function is "function" because functions are a special kind of object — and the language designers made typeof return "function" as a special case for convenience.
 
 * typeof {}              // "object"
 * typeof []              // "object"
 * typeof null            // "object" ← quirk
 * typeof function(){}    // "function"
   
 * All of these (objects, arrays, functions) are objects at their core.
 * However, functions are callable, and JavaScript treats that as a distinct "type of object".
 * typeof was designed to return "function" for callable objects to help distinguish them from regular objects.

 * Instead of this typeof something === "object" && typeof something.call === "function"
 * It's easier typeof something === "function"
 
 * Functions are objects, but with special capabilities (like being callable).
 * typeof returns "function" for functions as a useful shortcut.
 * This is the only case where typeof returns something more specific than "object". 
 */
