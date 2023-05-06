// Challenge
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 


function countOccurences (arr, index) {
    let occurences = [];
    arr.forEach(element => {
        occurences = arr.filter((elem) => {
            return elem === arr[index]; 
        }) ;
    });

    return occurences.length;
}

function checkIfAlreadyAvailable(finalArray, originalArray, index) {
    if (finalArray.includes(originalArray[index])) return true;

    let alreadyAvalaible = false;
    finalArray.forEach((array) => {
        if (Array.isArray(array)) {
            // this element array will always be with the same values
            if (array.includes(originalArray[index])) {
                alreadyAvalaible = true;
            }
        }
    });

    return alreadyAvalaible;
}

function organizeArray (arr) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {

        // If already includes that values return
        const alreadyAvalaible = checkIfAlreadyAvailable(finalArray, arr, i);
        if (alreadyAvalaible) continue;

        // count the occurences
        const count = countOccurences(arr, i);

        if (count === 1) {
            finalArray.push(arr[i]);
        } else {
            let tempArray = [];
            for (let j = 0; j < count; j++) {
                tempArray.push(arr[i]);
            }
    
            finalArray.push(tempArray);
        }
    };

    return finalArray;
}

const input1 = [1,2,4,591,392,2,5,10,2,1,1,1,20, 20, "20", "20"];

const result = organizeArray(input1);
console.log(result);