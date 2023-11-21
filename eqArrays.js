const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that takes two arrays, deep comapres them and returns a boolean
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i in arr1) {
      //case when the element is an array
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        //calling the function itself with the nested arrays as arguemnt
        let res = eqArrays(arr1[i], arr2[i]);
        if (!res) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
