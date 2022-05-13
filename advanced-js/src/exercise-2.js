'use strict';

const ValidationTypes = require('./lib/validation-types');
const { validate } = require('./lib/validation');

const schema = {
  name: ValidationTypes.string,
  age: ValidationTypes.number,
  extra: ValidationTypes.any,
};

const values = {
  name: 'John',
  age: '',
  extra: false,
};

const result = validate(schema, values);
console.log(
  result.length === 0 ? 'validation passed' : `invalid keys: ${result}`
);
//invalid keys: age
