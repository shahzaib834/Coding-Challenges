// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

const input = [2, 7, 11, 15];
const target = 13;

function findNumbersForTarget(inputArray = [], target) {
  // let finalArray = [];
  // input.forEach((item) => {
  //     let firstNum = item;
  //     for (let i = 0; i < input.length; i++) {
  //         if (input[i] + firstNum === target) {
  //             finalArray = [input[i], firstNum];
  //         }

  //         // for removing extra iterations
  //         if (finalArray?.length) break;
  //     }
  // });

  // return finalArray;

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] + inputArray[j] == target) {
        return [i, j];
      }
    }
  }
}

const result = findNumbersForTarget(input, target);
console.log(result);
