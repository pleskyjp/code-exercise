const getInfo = (...values) => {
  let results = [];

  let index = 0;
  values.forEach((value) => {
    const isFalsy = !value;
    const type = typeof value;
    const stringLength = String(value).length;

    results.push({
      isFalsy,
      type,
      stringLength,
      index,
    });

    index++;
  });
  return results;
};

module.exports = getInfo;
