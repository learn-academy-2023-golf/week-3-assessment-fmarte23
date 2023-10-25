// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
    // Set describe, it, and expect statements. 
    // create a function that takes in >2 and returns fibonacci array
    // use .toEqual to make the test pass
    // input: array
    // Expected output 1: [1, 1, 2, 3, 5, 8]
    // Expected output 2: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    // create a function () => {} const
    // taking a parameter that represents array seqence
    // use .length and .push method on that array parameter 
    // evaluate the length of each element of the array parameter
    // calculate if the length of each element of array parameter  by adding the previous 2 elements and coming up with the sum in the next
    // create a conditional to evaluate the fibonacci sequence
    // return an array provided by the .push that contains the next number in which consequential numbers are the sum of the previous 2 numbers.

describe("sequence", () => {
  it("returns an array containing Fibonacci sequence", () => {
    expect(sequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(sequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibonacciLength1 = 6
function sequence(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibonacciSequence = [1, 1];
    while (fibonacciSequence.length < n) {
      const nextNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
      fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence;
  }
}

// Example usage:
const n = 10; // Replace with your desired length
// const fibonacciSequence = generateFibonacci(n);
// console.log(fibonacciSequence);

// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// PASS  ./code-challenges.test.js
// sequence
//   ✓ returns an array containing Fibonacci sequence (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.884 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 2.96s.
// learnacademy@MacBook-Air-3 week-3-assessment-fmarte23 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-3-assessment-fmarte23/node_modules/.bin/jest
// console.log


//     at Object.log (code-challenges.test.js:97:9)

// PASS  ./code-challenges.test.js
// sequence
//   ✓ returns an array containing Fibonacci sequence (6 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.976 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 3.15s.
// learnacademy@MacBook-Air-3 week-3-assessment-fmarte23 % 


// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
    // Set describe, it, and expect statements. 
    // create a function that takes sortVals
    // create a variable that defines values
    // use .toEqual to make the test pass
    // input: takes in an object and returns array of object's values arranged from least to greatest
    // Expected output 1: Expected output: [15, 15, 20, 30, 30, 60, 90]
    // Expected output 2: [10, 15, 20, 45, 60, 65, 100]
    // create a function () => {} const
    // taking a parameter that represents array seqence
    // use .sort method on that array parameter 
    // evaluate the length of each element of the array parameter
    // use comparison function (a, b) => a - b
    // create a conditional to evaluate 
    // return values
    



describe("sortVals", () => {
    it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
        expect(sortVals(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
            });
          })

describe("sortVals", () => {
    it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
        expect(sortVals(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
            });
          })
          
          // b) Create the function that makes the test pass.
          
        
          
  const sortVals = (obj) => {
  const values = Object.values(obj).sort((a, b) => a - b);
            return values;
  }

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
 
// from ChatGPT:
function sortVals(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Input is not a valid object.');
  }

  const values = Object.values(obj);

  if (values.some(value => typeof value !== 'number')) {
    throw new Error('Object values are not all numbers.');
  }

  return values.sort((a, b) => a - b);
}

// Example usage:
const myObject = {
  a: 5,
  b: 2,
  c: 8,
};

const sortedValues = sortObjectValues(myObject);
console.log(sortedValues); // Output: [2, 5, 8]

// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.


