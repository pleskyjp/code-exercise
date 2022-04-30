var newObj = {
  newValues: [],
  oldValues: [],
  set value(value) {
    this.newValues.push(value);

    this.oldValues.push(this.newValues.indexOf(value));
  },
  get value() {
    return this.newValues;
  },
};

newObj.value = 1;
newObj.value = 2;
newObj.value = 3;
newObj.value = 4;
console.log(newObj.oldValues); // [0, 1, 2, 3]
