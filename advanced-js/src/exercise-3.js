'use strict';

const Person = require('./lib/person'); // create file person.js
const Human = require('./lib/human'); // create file human.js
const UuEE = require('./lib/uuee'); // create file uuee.js

const John = new Human('John', 25);
const Peter = new Human('Peter', 32);
const machine = new UuEE(John);

console.log(machine.sayHello(Person)); //No!
console.log(machine.sayHello(John)); //Hello John
