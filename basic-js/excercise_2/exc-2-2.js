//2.2: snake_case to camelCase

const snakeToCamel = (snake) => {
  return snake
    .toLowerCase()
    .replace(/([-_][a-z])/g, (letter) =>
      letter.toUpperCase().replace('-', '').replace('_', '')
    );
};

console.log(snakeToCamel('some_new_word_to_transform_and_a')); //someNewWordToTransformAndA
