// 3.2: create function that accepts 3 functions and 1 number as params
// each of these functions accept 1 param - number and return another number
// default value for that number is 42
// function returns largest result from one of these functions
function acceptThreeFunctions(aFunc, bFunc, cFunc, number = 42) {
  let aResult = aFunc(number);
  let bResult = bFunc(number);
  let cResult = cFunc(number);

  return Math.max(aResult, bResult, cResult)
}

console.log(acceptThreeFunctions(a => a * 2, b => b * 3, c => c * 4)); // 168