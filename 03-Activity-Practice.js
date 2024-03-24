//////////////////////////////////////////////////////////////////////////////////////////////////
// 1. This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  a * b;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Complete the solution so that it reverses the string passed into it. SOLVED
// Examples
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str) {
  return str.split("").reverse().join("");
}

// split(''): This splits the string into an array of characters.
// reverse(): This reverses the order of elements in the array.
// join(''): This joins the elements of the array back into a string.

//////////////////////////////////////////////////////////////////////////////////////////////////
// 4. We need a function that can transform a number (integer) into a string.
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  // Return a string of the number here!
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
// Examples:
// 1: -1
// 14: -14
// -34: 34
function findOpposite(number) {
  //your code here
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Return Negative
// You are given a number and have to make it negative. But maybe the number is already negative.
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
  // Code?
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
// HINT:
// let myWord = "Hello"
// console.log(myWord[0]) // expected output is "H"
// console.log(myWord[1]) // expected output is "e"

function removeChar(str) {
  //You got this!
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 9. We need a function that can transform a string into a number. All inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function (str) {
  // put your code here
  return null;
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// 10. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
  //your code here
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 11. Make a function that adds every number from 0 to the number passed in.  The number passed in will always be greater than or equal to 0.  SOLVED

function addNumbers(number) {
  if (typeof number !== "number" || isNaN(number) === true) {
    return NaN;
  }

  let answer = 0;
  for (let i = 0; i < number; i++) {
    answer = answer + number;
  }
  return answer;
}

// Input Validation:
// The code first checks if the input parameter number is not of type "number" or if it is NaN (Not a Number).
// It does this using the logical OR (||) operator.
// If either of these conditions is true, the function immediately returns NaN.
// This ensures that the function only operates on valid numerical inputs.

// Initialization:
// If the input passes the validation, the code initializes a variable named answer with a value of 0.
// This variable will be used to accumulate the result of the addition operation.

// For Loop:
// Next, there is a for loop that runs number times.
// In each iteration of the loop, the value of number is added to the current value of answer.
// Essentially, this loop performs repeated addition of number to itself number times.

// Return the Result:
// After the loop completes,
// the function returns the accumulated value stored in the answer variable,
// which represents the result of adding number to itself number times.

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit module.exports
module.exports = { multiply, evenOrOdd, reverseString, numberToString, findOpposite, makeNegative, boolToWord, removeChar, stringToNumber, greet, addNumbers };
//////////////////////////////////////////////////////////////////////////////////////////////////
