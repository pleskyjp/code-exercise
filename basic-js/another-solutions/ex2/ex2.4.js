// 2.4: transform CSV
let csvInput = "1,  Peter,  22;" +
  "2, Jim, 11,;" +
  "3, P eeter, 8 ;";

function transformCsv(string) {
  let result = [];

  // oddelit jednotlive radky
  let rows = string.split(";");
  //rows.pop();

  for (let row of rows) {
    if (row) {
      // oddelit jednotlive elementy
      let elements = row.split(",");

      let id = parseInt(elements[0]);
      let name = elements[1].trim();
      let age = parseInt(elements[2]);

      result.push({
        id,
        name,
        age
      });
    }
  }

  return result
}

console.log(transformCsv(csvInput));

// [
//    { id: 1, name: 'Peter', age: 22 },
//    { id: 2, name: 'Jim', age: 11 },
//    { id: 3, name: 'P eeter', age: 8 }
// ]