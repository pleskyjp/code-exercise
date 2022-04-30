var input4 = [1, 2, 2, 4, 6, 9, 11, 12, 11, 666];

function findModus(arr) {
  let highestOccurrence = 0;
  let count = {};
  let result = [];

  arr.forEach((value) => {
    count[value] === undefined ? (count[value] = 1) : count[value]++;

    if (count[value] > highestOccurrence) {
      result = [value];
      highestOccurrence = count[value];
    } else if (count[value] === highestOccurrence) {
      result.push(value);
      highestOccurrence = count[value];
    }
  });

  return result;
}

console.log(findModus(input4)); //[ 2, 11 ]
