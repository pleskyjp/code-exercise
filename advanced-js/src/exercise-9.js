const printString = (string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(console.log(string));
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = async () => {
  await printString('A');
  await printString('B');
  await printString('C');
};

printAll();

// expected result in console:
// A
// B
// C
