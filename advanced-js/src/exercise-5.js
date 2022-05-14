const printString = (string, callback) => {
  console.log('STARTED: ' + string);
  setTimeout(() => {
    console.log(string);
    callback();
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
