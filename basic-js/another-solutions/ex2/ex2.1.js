// 2.1: camelCase to snake_case
function isUpperCase(char) {
  return char === char.toUpperCase();
}

function camelToSnake(camel) {
  let characters = camel.split("");
  for (let i = 0; i < characters.length; i ++) {
    if (isUpperCase(characters[i])) {
      characters[i] = `_${characters[i].toLowerCase()}`;
    }
  }
  return characters.join("");
}

console.log(camelToSnake("someNewWordToTransformAndA")); //some_new_word_to_transform_and_a