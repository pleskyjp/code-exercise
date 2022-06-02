const printString = (string, callback) => {
  setTimeout(() => {
    console.log(string);
    return callback();
  }, Math.floor(Math.random() * 100) + 1);
};

const printAll = () => {
  printString('A', () => {
    printString('B', () => {
      printString('C', () => {});
    });
  });
};

printAll();

// expected result in console:
// A
// B
// C
