// implement Array.flat for one level.
// BONUS: Do it for 2 levels too

function flattenedArray(array, depth = 1) {
  let resultArray = [];

  // array.forEach((element) => {
  //   if (Array.isArray(element)) {
  //     element.forEach((elem) => {
  //       if (Array.isArray(elem)) {
  //         elem.forEach((e) => {
  //           flattenedArray.push(e);
  //         });
  //       } else {
  //         flattenedArray.push(elem);
  //       }
  //     });
  //   } else {
  //     flattenedArray.push(element);
  //   }
  // });

  // With Recursion Technique
  array.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      resultArray.push(...flattenedArray(element, depth - 1));
    } else {
      resultArray.push(element);
    }
  });

  return resultArray;
}

const result = flattenedArray([1, 2, [3, 4], 5, [6, 7, [8, 5]]], 2);
console.log(result);
