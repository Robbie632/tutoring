/**
 * A Beginner's Guide to Arrays in JavaScript 👨‍💻
 *
 * Arrays are a fundamental data structure in JavaScript, used to store
 * multiple values in a single variable. Think of an array as a list or a
 * container for a collection of items. These items can be of any data type.
 */

// --- What is an Array? 🤔 ---

/**
 * In simple terms, an array is an ordered collection of values. Each value
 * in the array has an index, which is its position in the list. The first
 * item is at index 0, the second at index 1, and so on. This zero-based
 * indexing is a crucial concept to remember.
 */

// An array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// An array of numbers
let scores = [95, 88, 72, 65];

// An array with different data types
let mixedArray = ["Hello", 123, true];


// --- Creating and Accessing Arrays 🛠️ ---

/**
 * Creating an Array
 * The most common way to create an array is using square brackets [].
 */

// Creating an empty array
let emptyArray = [];

// Creating an array with initial values
let colors = ["Red", "Green", "Blue"];

/**
 * Accessing Array Elements
 * You can access an element by using its index inside square brackets [].
 */

// Accessing the first element
let firstColor = colors[0]; // "Red"
console.log(`The first color is: ${firstColor}`);

// Accessing the third element
let thirdColor = colors[2]; // "Blue"
console.log(`The third color is: ${thirdColor}`);

// Accessing an index that doesn't exist returns 'undefined'
let nonExistent = colors[5]; // undefined
console.log(`Accessing an out-of-bounds index: ${nonExistent}`);


// --- Modifying Arrays 🔄 ---

/**
 * You can change, add, or remove elements from an array.
 */

// Changing an Element
let students = ["Alice", "Bob", "Charlie"];
students[1] = "Bobby"; // Now students is ["Alice", "Bobby", "Charlie"]
console.log(`Modified students array: ${students}`);

// Adding Elements
// push(): Adds one or more elements to the end of an array.
students.push("David"); // students is now ["Alice", "Bobby", "Charlie", "David"]
console.log(`Students after push(): ${students}`);

// unshift(): Adds one or more elements to the beginning of an array.
students.unshift("Eve"); // students is now ["Eve", "Alice", "Bobby", "Charlie", "David"]
console.log(`Students after unshift(): ${students}`);

// Removing Elements
// pop(): Removes the last element from an array and returns it.
let lastStudent = students.pop(); // lastStudent is "David"
console.log(`Removed student with pop(): ${lastStudent}`);
console.log(`Students after pop(): ${students}`);

// shift(): Removes the first element from an array and returns it.
let firstStudent = students.shift(); // firstStudent is "Eve"
console.log(`Removed student with shift(): ${firstStudent}`);
console.log(`Students after shift(): ${students}`);


// --- Looping Through Arrays 🔁 ---

/**
 * The for loop: A classic way to loop through an array using a counter.
 */
let animals = ["Dog", "Cat", "Fish"];
console.log("\n--- Looping with a for loop ---");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

/**
 * The for...of loop: A more modern and readable way to iterate over elements.
 */
console.log("\n--- Looping with a for...of loop ---");
for (let animal of animals) {
  console.log(animal);
}


// --- Advanced Array Methods: map() and filter() ✨ ---

/**
 * These methods don't modify the original array but instead return a new array.
 */

// The map() method
// Creates a new array by calling a provided function on every element.
let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(number => {
  return number * 2;
});

console.log("\n--- The map() method ---");
console.log(`Original numbers array: ${numbers}`);
console.log(`Doubled numbers array: ${doubledNumbers}`);


// The filter() method
// Creates a new array with all elements that pass a test (i.e., return true).
let allNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = allNumbers.filter(number => {
  return number % 2 === 0;
});

console.log("\n--- The filter() method ---");
console.log(`Original numbers array: ${allNumbers}`);
console.log(`Even numbers array: ${evenNumbers}`);