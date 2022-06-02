// 3.2: create function foo that accepts 3 functions and 1 number as params
// each of these functions accept 1 param - number and return another number
// default value for that number is 42
// function foo return largest result from one of these functions

const acceptThreeFunctions = (a, b, c, n = 42) => {
  return [a(n), b(n), c(n)].sort((a, b) => b - a)[0];
};

console.log(
  acceptThreeFunctions(
    (a) => a * 2,
    (b) => b * 3,
    (c) => c * 4
  )
); // 168
