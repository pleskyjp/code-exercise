const printString = (string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(string));
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = () => {
  printString('A')
    .then(() => {
      return printString('B');
    })
    .then(() => {
      return printString('C');
    });
};

printAll();
