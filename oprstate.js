// Question # 01
// Find Even and Odd Number.
// Method 01
// let num = 4;
// if (num % 2 == 0) {
//   console.log("Its Even");
// } else {
//   console.log("Its Odd");
// }
// // Method 02
// function evenofffun(n) {
//   n % 2 == 0 ? console.log("Its Even") : console.log("Its Odd");
// }
// console.log(`Its ${evenofffun(67)}`);

// Question 02
//check the number that is entered by the user is multiple of 5 or not .
// let userentnum = 35;
// userentnum %5==0 ? console.log('is not Multiple of 5') : console.log("is Not multiple of");

// Question 03
// Write a code which can give grades to students according to their scores:
// 80-100 = A, 70-89 = B, 60-69 = C, 50-59 = D, 0-49 = F.
// let studentmarks = 91;
// if (studentmarks >= 90) {
//   console.log("Grade A+");
// } else if (studentmarks >= 80 && studentmarks <= 89) {
//   console.log("Grade A");
// } else if (studentmarks >= 70 && studentmarks <= 79) {
//   console.log("Grade B");
// } else if (studentmarks >= 60 && studentmarks <= 69) {
//   console.log("Grade C");
// } else if (studentmarks >= 50 && studentmarks <= 59) {
//   console.log("Grade D");
// } else {
//   console.log("Grade F");
// }
// Question 04
// Write a function isLeapYear(year) that taks a number year and returns true if it's a leap year, otherwise false.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else return `${year} is not a leap year`;
}
let res = isLeapYear(2014);
console.log(res);

