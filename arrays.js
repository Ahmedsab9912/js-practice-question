// Question 01
// For a given array with marks of students => [84,97,44,37,76,60];
// find the avg marks of the intire class

// let studentsMarks = [84, 97, 44, 37, 76, 60];
// // so to find the avg = totalsum / total index numbers
// let avg = 0;
// let totalsum = 0;
// for (let i of studentsMarks) {
//   totalsum += i;
// }
// avg = totalsum / studentsMarks.length;
// console.log(`Average of stumarks =  [${studentsMarks}] is ${Math.floor(avg)}`);

// Question 02
// For a given array with prices of 5 items => [250,645,300,900,50];
// All items have an offer of 10% Off on them . change the array to store final price after applying offer.

// let givenArray = [250, 645, 300, 900, 50];
// let offerArray = [];
// for (let i of givenArray) {
//   console.log(
//     `New price of $${i} after applying 10% off is = $${Math.floor((offerArray = i * (90 / 100)))}`,
//   );
// }

// Question 03
// Create an array to store companies => "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end .

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // Now we are Removing first company from array :
// // companies.shift();
// // console.log(companies);

// // // Now Removing UBER and Adding Old in its place :
// // companies.splice(2,1,'Ola');
// // console.log(companies);

// // Now Adding Amazon in the End of the List :
// companies.push("Amazon");
// console.log(companies);

// Question 04
// Task:
// Write a function filterAndDouble(arr) that:
// Takes an array of numbers.
// Returns a new array containing only the even numbers, each multiplied by 2.
// Do not modify the original array.
// Constraints:
// Use filter and map (preferred, to practice array methods).
// Or use a for loop and push – your choice.

// Method 01
// function filterAndDouble(arr) {
//   return arr.filter((num) => num % 2 === 0).map((num) => num * 2);
// }
// let result = filterAndDouble([1,2,3,4,5,6,7,8,9]);
// console.log(result);

// Method 02
function filterAndDouble(arr) {
  // Assign new Empty Array
  let newArray = [];
  for (let num of arr) {
    if (num % 3 === 0) {
      newArray.push(num * 2);
    }
  }
  return newArray;
}
let result = filterAndDouble([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);

