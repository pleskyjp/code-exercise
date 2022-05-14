const Person = require('./lib/person');
const Human = require('./lib/human');
const UuEE = require('./lib/uuee');

const John = new Human('John', 25);
new Human('Peter', 32);
const machine = new UuEE(John);

console.log(machine.sayHello(Person));
console.log(machine.sayHello(John));
