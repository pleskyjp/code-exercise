const ACTIVE = 'active';
const INACTIVE = 'inactive';

class Person {
  constructor(state = ACTIVE, uid = '0-0') {
    if (state === ACTIVE || state === INACTIVE) {
      this._state = state;
    } else {
      throw new Error('invalid value: ' + value);
    }

    this._uid = uid;
    Person.count += 1;
  }

  getState() {
    return this._state;
  }

  setState(value) {
    if (value === ACTIVE || value === INACTIVE) {
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
Person.count = 0;

module.exports = Person;
