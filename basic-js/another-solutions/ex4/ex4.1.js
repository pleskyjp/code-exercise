// 4.1: get count of values with data type number (top level only)

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let obj = {
  a: 2,
  b: "22",
  c: false,
  d: "b",
  f: 3.14,
  g: 42,
  h: ["ahoj"]
};

// get all object values
let values = Object.values(obj);

// filter - we want only values of type number
let numberValues = values.filter(value => typeof value === "number");

// count them
let count = numberValues.length;

// let count = Object.values(obj).filter(value => typeof value === "number").length;

console.log(count); // 3

