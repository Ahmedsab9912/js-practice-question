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

function fizzBuzzSum(n) {
  let sumFizz = 0;
  let sumBuzz = 0;
  let fizzBuzzSum = 0;
  let totalSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      sumFizz += i;
    } else if (i % 5 === 0 && i % 3 !== 0) {
      sumBuzz += i;
    } else if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzzSum += i;
    }
    totalSum += i;
  }
  return {
    sumFizz: sumFizz,
    sumBuzz: sumBuzz,
    fizzBuzzSum: fizzBuzzSum,
    totalSum: totalSum,
  };
}

let r = fizzBuzzSum(11);
console.log(r);
