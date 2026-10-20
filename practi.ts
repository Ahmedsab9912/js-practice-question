let num: number[] = [1, 2, 33, 4, 5];
let max: number = num[0];

for (let i: number = 0; i < num.length; i++) {
  if (max < num[i]) {
    max = num[i];
  }
}
console.log(`Largest Number is ${max}`);


