// 4.2: add setter which also store previous values on the object
let newObj = {
  oldValues: [],
  _value: 0,
  _dog: "Bob",

  // getter
  get value() {
    return this._value
  },

  // setter
  set value(val) {
    this.oldValues.push(this.value);
    this._value = val
  },

  // getter
  get dog() {
    return this._dog
  },

  _callDog() {
    console.log(`Come here, ${this.dog}!`);
  }
};

newObj.value = 1;
newObj.value = 2;
newObj.value = 3;
newObj.value = 4;

console.log(newObj.oldValues); // [0, 1, 2, 3]

newObj._callDog();