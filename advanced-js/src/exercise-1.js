const getInfo = (...values) => {
  let results = [];

  let index = 0;
  values.forEach((value) => {
    const isFalsy = !value;
    const type = typeof value;
    const StringLength = String(value).length;

    results.push({
      isFalsy,
      type,
      StringLength,
      index,
    });

    index++;
  });
  return results;
};

module.exports = getInfo;
