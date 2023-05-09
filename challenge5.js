// Implement Object.Entries().   takes an object returns array of arrays.

const person = {
  name: 'Shahzaib',
  age: 26,
};

// Output:-
// [
//     ["name", "Shahzaib"],
//     ["age", "26"]
// ]

const convertToArrayOrArrays = (object) => {
  let result = [];

  for (let obj in object) {
    result.push([obj, object[obj]]);
  }

  return result;
};

console.log(convertToArrayOrArrays(person));
