const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function (arr1, arr2) {
  let res = eqArrays(arr1, arr2);
  if (res) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
const without = function (array1, array2) {
  let array3 = [];
  for (let i of array1) {
    for (let j of array2) {
      if (i === j) {
        break;
      } else if (j === array2[array2.length - 1]) {
        array3.push(i);
      }
    }
  }
  return array3;
};
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
