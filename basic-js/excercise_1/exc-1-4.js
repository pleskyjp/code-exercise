//1.4: unique elements (without set)

const input5 = [1, 4, 2, 1, 2, 2, 2, 3, 9, 8, 33];

const findUnique = (arr) => {
  return arr
    .sort((a, b) => {
      return a - b;
    })
    .filter((value) => arr.filter((element) => element === value).length === 1);
};
console.log(findUnique(input5)); // [ 3, 4, 8, 9, 33 ]
