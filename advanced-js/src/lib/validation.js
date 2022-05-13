const validate = (schema, values) => {
  let invalidKeys = [];
  Object.keys(schema).forEach((key) => {
    if (!schema[key](values[key])) {
      invalidKeys.push(key);
    }
  });
  return invalidKeys;
};

module.exports = {
  validate,
};
