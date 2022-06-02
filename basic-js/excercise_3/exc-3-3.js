//3.3: find oldest person in array of objects using array.reduce

let persons = [
  { firstName: 'Jim', lastName: 'Jimithy', age: 15 },
  { firstName: 'Peter', lastName: 'Peterson', age: 25 },
  { firstName: 'Carl', lastName: 'Carlson', age: 28 },
  { firstName: 'Jane', lastName: 'Janison', age: 22 },
];

const oldestPerson = persons.reduce((prev, current) =>
  prev.age > current.age ? prev : current
);
console.log(oldestPerson); // { firstName: 'Carl', lastName: 'Carlson', age: 28 }
