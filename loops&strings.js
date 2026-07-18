// Question 01
// Print all even numbers from 0 to 100.
// Method 01
// let init = 0;
// let endval = 100;
// for (let i = init; i <= endval; i++) {
//   console.log(`even number are ${2 * i}`);
// }
// console.log("loop ends");
// Method 02
// let i = 0;
// while (i <= 100) {
//   console.log(`even number are ${2 * i}`);
//   i++;
// }
// Method 03ß
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Question 02
// Create a game where you start with any random game number. Ask the user to keep guessing the number until the user enters correct value.
// function randomGame(inputnum) {
//   let maxnumber = 11;
//   result = 0;
//   result = Math.floor(Math.random() * maxnumber);
//   for (let i = result; i <= maxnumber; i++) {
//     return inputnum === result
//       ? console.log(
//           `You Win 🥇 Input Number =  ${inputnum} is Equals to Random Numner = ${result}`,
//         )
//       : console.log(
//           `Try Again 😢 Input Number =  ${inputnum} is Equals to Random Numner = ${result}`,
//         );
//   }
// }

// let theResult = randomGame(2);
// console.log(theResult);

// Question 03
// Write a function fizzBuzzSum(n) that takes a positive integer n, loops through all numbers from 1 to n(inclusive), and returns an object containing:
// sumFizz: sum of all numbers divisible by 3 (but not 5).
// sumBuzz: sum of all numbers divisible by 5 (but not 3).
// sumFizzBuzz: sum of all numbers divisible by both 3 and 5.
// totalSum: sum of all numbers from 1 to n.

// function fizzBuzzSum(n) {
//   let sumFizz = 0;
//   let sumBuzz = 0;
//   let fizzBuzzSum = 0;
//   let totalSum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       sumFizz += i;
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       sumBuzz += i;
//     } else if (i % 5 === 0 && i % 3 === 0) {
//       fizzBuzzSum += i;
//     }
//     totalSum += i;
//   }
//   return {
//     sumFizz: sumFizz,
//     sumBuzz: sumBuzz,
//     fizzBuzzSum: fizzBuzzSum,
//     totalSum: totalSum,
//   };
// }

// let r = fizzBuzzSum(11);
// console.log(r);

// Question 04
// Write a function charFrequency(str) that takes a string str and returns an object where:
// Keys are the unique characters (case-sensitive! 'a' and 'A' are different).
// Values are the count of how many times that character appears.
// Special rule: Ignore spaces (' ') – do not count them.
// After building the frequency object, also return the total number of characters counted (excluding spaces) as a property totalCount in the same object.

function charFrequency(str) {
  // 1. Create our blank tally sheet object and a counter for totals
  let frequency = {};
  let totalCount = 0;

  // 2. Loop through every character in the string
  for (let char of str) {
    // Special rule: Ignore spaces
    if (char === " ") {
      continue; // Skip this iteration and go to the next character logic 
    }

    // If the character already exists in the object, add 1.
    // Otherwise, initialize it at 1.
    if (frequency[char]) {
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }

    // Increment our total count tracker
    totalCount += 1;
  }

  // 3. Add the totalCount property to the final object
  frequency.totalCount = totalCount;

  // 4. Return the complete object
  return frequency;
}

// Test the function
let result = charFrequency("AAhmed");
console.log(result);
