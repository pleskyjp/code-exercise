//4.3: remove all private properties (starts with _) from the object

const anotherObj = {
  a: 1,
  _b: 2,
  _c: 4,
  _d: () => {},
  e: () => {},
};

Object.keys(anotherObj).forEach((value) => {
  value.startsWith('_') && delete anotherObj[value];
});

console.log(anotherObj); //{ a: 1, e: [Function: e] }
