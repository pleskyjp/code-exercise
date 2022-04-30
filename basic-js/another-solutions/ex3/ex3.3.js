// 3.3: find oldest person in array of objects using array.reduce

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

let persons = [
  {firstName: "Jim", lastName: "Jimithy", age: 15},
  {firstName: "Peter", lastName: "Peterson", age: 25},
  {firstName: "Carl", lastName: "Carlson", age: 28},
  {firstName: "Jane", lastName: "Janison", age: 22}
];

let oldestPerson = persons.reduce((oldest, element) => {
  if (oldest.age < element.age) {
    oldest = element
  }

  return oldest
});

console.log(oldestPerson); // { firstName: 'Carl', lastName: 'Carlson', age: 28 }

persons.sort((a,b) => b.firstName - a.firstName);
console.log(persons);

