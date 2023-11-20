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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
const middle = function (arr) {
  // case when only two elements
  if (arr.length < 3) {
    return [];
  } else {
    let ans = [];
    //check if length is even or odd, push two middle elements if odd, push middle element if odd
    arr.length % 2 === 0
      ? (ans = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1))
      : ans.push(arr[~~(arr.length / 2)]);
    return ans;
  }
};
