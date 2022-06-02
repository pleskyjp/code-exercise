const addString = (previous, current) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(previous + ' ' + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const addAll = async () => {
  let result = await addString('', 'A');
  result = await addString(result, 'B');
  result = await addString(result, 'C');
  console.log(result);
};

addAll();

// expected result in console:
// A B C
