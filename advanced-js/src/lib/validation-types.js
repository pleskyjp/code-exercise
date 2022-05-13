const string = (value) => {
  return typeof value === 'string';
};

const number = (value) => {
  return typeof value === 'number';
};

const any = () => {
  return true;
};

module.exports = {
  string,
  number,
  any,
};
