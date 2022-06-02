//1.1: sum of even elements of array

const input = [1, 3, 6, 0, 5, -2, 9, 11, 16];
let total = 0;

input.forEach((value) => {
  if (value % 2 !== 0) return;
  total += value;
});

console.log(total); // 20
