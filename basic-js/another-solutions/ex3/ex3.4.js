// 3.4: add luckyNumber to each person in array using array.map
// luckyNumber is equal to total length of their full name (with space)

let persons = [
  {firstName: "Jim", lastName: "Jimithy", age: 15},
  {firstName: "Peter", lastName: "Peterson", age: 25},
  {firstName: "Carl", lastName: "Carlson", age: 28},
  {firstName: "Jane", lastName: "Janison", age: 22}
];

// map nemodifikuje puvodni pole
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let luckyPersons = persons.map((person) => {
  // interpolace
  let clone = { ...person };
  let fullName = `${clone.firstName} ${clone.lastName}`;

  // vytvoreni noveho parametru (vlastnosti) pro objekt
  clone.luckyNumber = fullName.length;

  return clone;
});

console.log(luckyPersons);

//[ { firstName: 'Jim',
//     lastName: 'Jimithy',
//     age: 15,
//     luckyNumber: 11 },
//   { firstName: 'Peter',
//     lastName: 'Peterson',
//     age: 25,
//     luckyNumber: 14 },
//   { firstName: 'Carl',
//     lastName: 'Carlson',
//     age: 28,
//     luckyNumber: 12 },
//   { firstName: 'Jane',
//     lastName: 'Janison',
//     age: 22,
//     luckyNumber: 12 } ]