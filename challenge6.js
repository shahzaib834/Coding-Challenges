// You are given two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order, and each of their nodes contains a single digit.
//Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function reverseArray(array) {
  const resultArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    resultArray.push(array[i]);
  }

  return resultArray;
}

function addNumbersReverse(l1, l2) {
  // const reversedl1 = Number(l1.reverse().join(''));
  // const reversedl2 = Number(l2.reverse().join(''));

  const reversedl1 = Number(reverseArray(l1).join(''));
  const reversedl2 = Number(reverseArray(l2).join(''));

  const sum = (reversedl1 + reversedl2).toString();
  let result = [];
  for (let i = 0; i <= sum.length - 1; i++) {
    result.push(sum[i]);
  }
  return result.reverse();
}
var l1 = [2, 4, 3];
var l2 = [5, 6, 4];
console.log(addNumbersReverse(l1, l2));
