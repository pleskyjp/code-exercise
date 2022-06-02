// 2.1: camelCase to snake_case

const camelToSnake = (camel) => {
  return camel.replace(/([A-Z]+)/g, (letter) => `_${letter.toLowerCase()}`);
};

console.log(camelToSnake('someNewWordToTransformAndA')); //some_new_word_to_transform_and_a
