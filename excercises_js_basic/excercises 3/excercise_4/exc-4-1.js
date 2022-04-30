var obj = {
  a: 2,
  b: '22',
  c: false,
  d: 'b',
  f: 3.14,
  g: 42,
};

let count = 0;

Object.keys(obj).forEach((value) =>
  typeof obj[value] === 'number' ? count++ : null
);

console.log(count); // 3
