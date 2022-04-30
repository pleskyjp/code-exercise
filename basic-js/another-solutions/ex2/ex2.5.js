// 2.5 count the changes in the string
let changes = "+++-+---++--+-+-++";

function countOfChanges(str) {
  let chars = str.split("");
  let count = 0;

  // pozor na delku chars - nesmime pristupovat na neexistujici index
  // proto chars.length - 1 a ne chars.length
  for (let i = 0; i < chars.length - 1; i++) {
    // dva znaky vedle sebe nejsou stejne = zmena
    if (chars[i] !== chars[i+1]) count += 1;
  }

  return count
}

console.log(countOfChanges(changes)); //10