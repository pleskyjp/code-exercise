const addString = (previous, current, callback) => {
  setTimeout(() => {
    callback(previous + ' ' + current);
  }, Math.floor(Math.random() * 100) + 1);
};

const addAll = (value) => {
  addString(value, 'A', (value) => {
    addString(value, 'B', (value) => {
      addString(value, 'C', (value) => {
        console.log(value);
      });
    });
  });
};
addAll('');
// expected result in console:
// A B C
