// Question # 01
// Find Even and Odd Number.
// Method 01
let num = 4;
if (num % 2 == 0) {
  console.log("Its Even");
} else {
  console.log("Its Odd");
}
// Method 02
function evenofffun(n) {
  n % 2 == 0 ? console.log("Its Even") : console.log("Its Odd");
}
console.log(`Its ${evenofffun(67)}`);
