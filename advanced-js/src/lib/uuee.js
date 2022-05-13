const Person = require('./person');
const Human = require('./human');

class UuEE extends Person {
  constructor(owner, state, uid) {
    super(state, uid);
    if (!(owner instanceof Human)) {
      throw new Error('owner must be instance of Human!!');
    }
    this._owner = owner;
  }

  sayHello(caller) {
    if (caller !== this._owner) {
      return 'No!';
    } else {
      return `Hello ${this._owner.getName()}`;
    }
  }
}

module.exports = UuEE;
