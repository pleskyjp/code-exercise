// 2.2: snake_case to camelCase
function snakeToCamel(snake) {
  let words = snake.split("_");

  for (let i = 1; i < words.length; i++) {
    let word = words[i];

    word = word[0].toUpperCase() + word.slice(1);
    words[i] = word
  }

  return words.join("");
}

console.log(snakeToCamel("some_new_word_to_transform_and_a")); //someNewWordToTransformAndA