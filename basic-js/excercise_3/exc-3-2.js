function acceptThreeFunctions(a, b, c, n = 42) {
  return [a(n), b(n), c(n)].sort((a, b) => b - a)[0];
}

console.log(
  acceptThreeFunctions(
    (a) => a * 2,
    (b) => b * 3,
    (c) => c * 4
  )
); // 168
