var input6 = { a: 1, b: 2, ccc: 'abl', d: true };

function objectToString(obj) {
  const stringed = Object.entries(obj)
    .map((x) => x.join(' -> '))
    .join('; ');

  return `(${stringed})`;
}

console.log(objectToString(input6)); //(a -> 1; b -> 2; ccc -> abl; d -> true)
