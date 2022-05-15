const addString = (previous, current) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(previous + ' ' + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const addAll = () => {
  addString('', 'A').then((result) => {
    addString(result, 'B').then((result) => {
      addString(result, 'C').then((result) => console.log(result));
    });
  });
};

addAll();
