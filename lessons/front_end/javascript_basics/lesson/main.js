import loadQuizzes from "./quizzes.js";


loadQuizzes();
/**
 * JavaScript Basics
 *
 * This file aims to introduce fundamental JavaScript concepts,
 *
 * Best to run this file using a debugger and stepping through line by line to understand what is happening
 */

// --- SECTION 1: Variables and Data Types ---

/**
 * Variables are containers for storing data values.
 * In modern JavaScript, we primarily use `let` and `const`.
 */

let variablesContainerNameElement = document.querySelector('#variables-container > #name')
// `let`: Used for variables whose values might change.
let userName = "Alice";
console.log("Initial userName:", userName);
variablesContainerNameElement.innerText = userName;
userName = "Bob"; // We can reassign 'let' variables
console.log("Updated userName:", userName);
variablesContainerNameElement.innerText = userName;

// `const`: Used for variables whose values should not change once assigned.
const appName = "🧑 My Profile";
console.log("App Name:", appName);
let profileHeader = document.getElementById('profile-header')
profileHeader.innerText = appName
// appName = "NewApp"; // This would cause an error! (TypeError: Assignment to constant variable.)

/**
 * Common Data Types:
 * - String: Textual data (e.g., "hello", 'world')
 * - Number: Numeric data (e.g., 10, 3.14)
 * - Boolean: True or false values (e.g., true, false)
 * - Null: Intentional absence of any object value
 * - Undefined: A variable that has been declared but not yet assigned a value
 * - Object: A collection of key-value pairs (more on this later)
 * - Array: An ordered list of values (more on this later)
 */

let age = 30; // Number
let isActive = true; // Boolean
let selectedColor = null; // Null
let favoriteFood; // Undefined (not yet assigned)

console.log("\n--- SECTION 1: Data Types Examples ---");
console.log("Type of userName:", typeof userName);
console.log("Type of age:", typeof age);
let variablesContainerAgeElement = document.querySelector('#variables-container > #age')
variablesContainerAgeElement.innerText = age
console.log("Type of isActive:", typeof isActive);
let variablesContainerIsActiveElement = document.querySelector('#variables-container > #is-active')
variablesContainerIsActiveElement.innerText = isActive
console.log("Type of selectedColor:", typeof selectedColor); // Note: typeof null is 'object', which is a historical quirk
console.log("Type of favoriteFood:", typeof favoriteFood);

// --- SECTION 2: Operators ---

/**
 * Operators perform operations on values and variables.
 */

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Very important for control flow!
console.log("\n--- SECTION 2: Comparison Operators ---");
let firstComparison = 10 == 10;
let firstComparisonElement = document.querySelector("#comparison-operators-container > #equal")
firstComparisonElement.textContent = firstComparison

let secondComparison = 10 != 10;
let secondComparisonElement = document.querySelector("#comparison-operators-container > #not-equal")
secondComparisonElement.textContent = secondComparison

let thirdComparison = 10 > 5;
let thirdComparisonElement = document.querySelector("#comparison-operators-container > #greater")
thirdComparisonElement.textContent = thirdComparison


let fourthComparison = 10 < 5;
let fourthComparisonElement = document.querySelector("#comparison-operators-container > #less-than")
fourthComparisonElement.textContent = fourthComparison




// --- SECTION 3: Control Flow (Conditionals) and logical operators---

/**
 * Control flow statements determine the order in which instructions are executed.
 * `if`, `else if`, `else` are used for conditional execution.
 */

console.log("\n--- SECTION 3: Control Flow (Conditionals) ---");
let temperature = document.getElementById('control-flow-temperature').innerText;
temperature = Number(temperature);
let isRaining = document.getElementById('control-flow-raining').innerText;
isRaining = isRaining == 'true'
let simpleForecastElement = document.getElementById('control-flow-simple-forecast');
let detailedForecastElement = document.getElementById('control-flow-detailed-forecast');
let bbqForecastElement = document.getElementById('control-flow-bbq-forecast');


if (temperature > 30) {
  simpleForecastElement.innerText = "It's a hot day!"
} else if (temperature > 20) {
  simpleForecastElement.innerText = "It's a warm day."
} else {
  simpleForecastElement.innerText = "It's a cool day."
}

// Logical Operators: && (AND), || (OR), ! (NOT)

if (temperature > 20 && !isRaining) {
  detailedForecastElement.innerText = "It's a hot and dry day"
} else if (temperature > 20 && isRaining) {
  detailedForecastElement.innerText = "It's a hot and rainy day"
} else if (temperature < 20 && !isRaining) {
   detailedForecastElement.innerText = "It's a cold and dry day"
}
debugger
if (temperature < 20 || isRaining) {
  bbqForecastElement.innerText = 'not a great day for a BBQ'
} else {
  bbqForecastElement.innerText = 'BBQ time!'

}


// TO DO continue here

// --- SECTION 4: Functions ---
console.log("\n--- SECTION 4: Functions ---");

/**
 * Functions are blocks of code designed to perform a particular task.
 * They are reusable!
 */

// Function Declaration

let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

function greet(e) {
  if (e.key == 'Enter') {
  let message = greeter(e.target.value)
  nameOutput.innerText = message
  }

}

function greeter(name) {
  return "hello there my good friend " + name ;
}

nameInput.addEventListener('keyup', greet)

let feelInput = document.getElementById('feel-input');
let feelOutput = document.getElementById('feel-output');

function handleEmotion(e) {
  if (e.key == 'Enter') {
  let message = amIhappy(e.target.value)
  feelOutput.innerText = message
  }
}

feelInput.addEventListener('keyup', handleEmotion)

function amIhappy(emotion) {
  if (emotion.includes("happy") || emotion.includes('good')) {
    return "I am glad you are feeling well";
  } else if (emotion.includes("sad")) {
    return "It sounds like you don't feel great, try to be kind to yourself";
  } else {
    return "I'm not sure how you are feeling";
  }
}


// --- SECTION 5: Arrays ---

/**
 * Arrays are ordered lists of values.
 * They are fundamental for handling collections of data.
 */

const fruits = ["Apple", "Banana", "Cherry"];
console.log("\n--- SECTION 5: Arrays ---");
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]); // Arrays are 0-indexed
console.log("Number of fruits:", fruits.length);
let shoppingListElement = document.getElementById('shopping-list');


// Iterating over arrays
console.log("\n--- SECTION 5: Iterating Arrays (for...of loop) ---");
for (const fruit of fruits) {
  let item = document.createElement('li');
  item.innerText = fruit;
  shoppingListElement.appendChild(item);
}

// Adding elements
fruits.push("Date"); // Adds to the end
console.log("Fruits after push:", fruits);

// Removing elements
const removedFruit = fruits.pop(); // Removes from the end
console.log("Removed fruit:", removedFruit);
console.log("Fruits after pop:", fruits);



// --- END OF FILE ---
