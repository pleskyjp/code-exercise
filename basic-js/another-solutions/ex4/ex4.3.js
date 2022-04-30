// 4.3: remove all private properties (starts with _) from the object
let anotherObj = {
  a: 1,
  _b: 2,
  _c: 4,
  _d: () => {},
  e: () => {}
};

//Object.keys(anotherObj).filter(x => x[0] === "_").forEach(key => delete anotherObj[key]);

Object.keys(anotherObj).forEach(key => key[0] === "_" && delete anotherObj[key]);

console.log(anotherObj); //{ a: 1, e: [Function: e] }x => x