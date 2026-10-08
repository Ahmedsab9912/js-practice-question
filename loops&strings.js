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
// Method 03
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

// function charFrequency(str) {
//   // variables to store values
//   let frequency = {};
//   let totalCount = 0;

//   // now using for loop to get stings frequency + total count
//   for (let char of str) {
//     if (char === " ") {
//       // If there is empty space it will continue
//       continue;
//     }
//     // this contidition is for the addinf frequency in empty variable for calculation
//     if (frequency[char]) {
//       frequency[char] += 1;
//     } else {
//       frequency[char] = 1;
//     }
//     totalCount++;
//   }
//   frequency.totalCount = totalCount;
//   return frequency;
// }

// let r = charFrequency("Ahmed ejaz");
// console.log(r);

// Question 05
// Enter the user full name? Generate a username for them based on the input. Start username, with @, followed by their full name and ending with the full name length. eg "ahmedbaig" output should be => "@ahmedbaig9";
// let userName = 'AhmedBaig';
// let nameLength = userName.length;
// console.log(`Orignal username is ${userName} and after prompting we got "@${userName}${nameLength}"`);

// Print Number from 1 to 10 using a for loop.

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// Print numbers from 10 to 1 using a while loop

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Print even numbers from 1 to 20

// let n = 20;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(`Even Number ${i}`);
//   }
// }

// // Print Odd numbers 1 to 15 using a while loop

// let n = 15;
// let i = 0;
// while (i <= n) {
//   if (i % 3 == 0) {
//     console.log(`Odd ${i}`);
//   }
//   i++;
// }

// // Print the multiplication table of 5 (i.e., 5 x 1 = 5 .. 5 x 10 = 50)

// for (let i = 0; i <= 10; i++) {
//   console.log(`2 x ${i} = ${i * 2}`);
// }

// // Find the sum of numbers from 1 to 100 using a loop.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i
// }
// console.log(sum);

// // Print all numbers between 1 to 50 that are divisible by 3

// let n = 50;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0) {
//     console.log(`${i} is divisible by 3`);
//   }
// }

// // Ask the user number and check weather its odd or even .

// function checkOddEvn(n) {
//   n % 2 === 0
//     ? console.log(`${n} is Even Number`)
//     : console.log(`${n} is Odd Number`);
// }
// checkOddEvn(97);

// // Print all numbers between 1 to 50 that are divisible by 3 and 5

// let n = 50;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} is divisible by 3 and 5`);
//   }
// }

// // write a loop from 1 to 100 that:
// // Prints each number
// // Stops completely when it finds the first number div by 7

// for (let i = 1; i < 101; i++) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
// }

// Write a loop from 1 to 20 that :
// Skips number divisible bt 3
// Prints all others

// Use continue

// Expected output : (1,2,4,5,7,8.. 20)

// for (let i = 1; i < 21; i++) {
//   if (i % 3 !=== 0) {
//     console.log(i);
//   }
// }

// Write a loop from 1 to 100 that:
// Print only 5 odd numbers
// then stops the loop

// use both if, continue and a counter + break

// Expected output : 1,3,5,7,9;
// let count = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) continue;
//   count++;
//   console.log(i, count);
//   if (count === 5) break;
// }

