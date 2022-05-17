class Person {
  static count = 0;

  constructor(state = 'active', uid = '0-0') {
    this._state = state;
    this._uid = uid;
    Person.count++;
  }

  getState() {
    return this._state;
  }

  setState(value) {
    if (value === 'active' || value === 'inactive') {
      this._state = value;
    } else {
      throw new Error('invalid value: ' + value);
    }
  }

  getUid() {
    return this._uid;
  }

  static getCountOfPersons() {
    return Person.count;
  }
}

module.exports = Person;
