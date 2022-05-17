const Person = require('./lib/Person');
const Human = require('./lib/Human');
const UuEE = require('./lib/Uuee');

const John = new Human('John', 25);
new Human('Peter', 32);
const machine = new UuEE(John);

console.log(machine.sayHello(Person));
console.log(machine.sayHello(John));
