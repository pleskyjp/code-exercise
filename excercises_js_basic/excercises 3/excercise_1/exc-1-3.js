var input4 = [1, 2, 2, 4, 6, 9, 11, 12, 11, 666];

function findModus(arr) {
  let highestOccurrence = 0;
  let count = [];
  let result = [];

  arr.forEach((element) => {
    if (count[element] === undefined) {
      count[element] = 1;
    } else {
      count[element]++;
    }

    if (count[element] > highestOccurrence) {
      result = [element];
      highestOccurrence = count[element];
    } else if (count[element] === highestOccurrence) {
      result.push(element);
      highestOccurrence = count[element];
    }
  });
  return result;
}

console.log(findModus(input4)); //[ 2, 11 ]
