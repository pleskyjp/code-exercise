//2.4: transform CSV

const csvInput = '1,  Peter,  22;' + '2, Jim, 11,;' + '3, P eeter, 8 ;';

const tranformCsv = (string) => {
  // Splitting string by semicolons to array
  const splittedString = string.split(';');

  // Removing last empty value in array
  splittedString.pop();

  // Removing comma on end of string & putting back to array
  const slicedArray = splittedString[1].slice(0, -1);
  splittedString.splice(1, 1, slicedArray);

  // Splitting by comma & removing blank spaces
  const finishedArray = splittedString.map((value) =>
    value.split(',').map((v) => v.trim())
  );

  // Final converting
  return finishedArray.map((value) =>
    value.reduce((a, v, i) => {
      if (i === 0) {
        return { ...a, id: parseInt(v) };
      } else if (i === 1) {
        return { ...a, name: v };
      } else if (i === 2) {
        return { ...a, age: parseInt(v) };
      }
    }, {})
  );
};

console.log(tranformCsv(csvInput));
// [ { id: 1, name: 'Peter', age: 22 },
//    { id: 2, name: 'Jim', age: 11 },
//    { id: 3, name: 'P eeter', age: 8 } ]
