// Question 01
// For a given array with marks of students => [84,97,44,37,76,60];
// find the avg marks of the intire class

let studentsMarks = [84, 97, 44, 37, 76, 60];
// so to find the avg = totalsum / total index numbers
let avg = 0;
let totalsum = 0;
for (let i of studentsMarks) {
  totalsum += i;
}
avg = totalsum / studentsMarks.length;
console.log(`Average of stumarks =  [${studentsMarks}] is ${Math.floor(avg)}`);
