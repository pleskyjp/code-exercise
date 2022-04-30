input5 = [1, 4, 2, 1, 2, 2, 2, 3, 9, 8, 33];

function findUnique(arr) {
  return arr
    .sort(function (a, b) {
      return a - b;
    })
    .filter((value) => arr.filter((element) => element === value).length === 1);
}
console.log(findUnique(input5)); // [ 3, 4, 8, 9, 33 ]
