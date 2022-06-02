//2.5: count of changes "+++-+---++--+-+-++"

const changes = '+++-+---++--+-+-++';

const countOfChages = (str) => {
  const array = str.split('');
  let count = 0;

  array.forEach((value, index) => {
    if (index === array.length - 1) return;
    if (value !== array[index + 1]) {
      count++;
    }
  });

  return count;
};

console.log(countOfChages(changes)); //10
