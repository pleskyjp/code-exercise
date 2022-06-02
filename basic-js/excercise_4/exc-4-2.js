//4.2: add setter which also store previous values on the object

const newObj = {
  newValue: 0,
  oldValues: [],
  set value(value) {
    this.oldValues.push(this.newValue);
    this.newValue = value;
  },
  get value() {
    return this.newValue;
  },
};

newObj.value = 1;
newObj.value = 2;
newObj.value = 3;
newObj.value = 4;
console.log(newObj.oldValues); // [0, 1, 2, 3]
