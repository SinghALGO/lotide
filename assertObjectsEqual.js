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
const eqObjects = function (object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  // Case when objects do not have the same amount of keys
  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (let i in object1) {
      // Case when the value is an array on both looped object elements
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        let result = eqArrays(object1[i], object2[i]);
        if (!result) {
          return false;
        }
      } else {
        //Case when the value is of other types on both looped object elements
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};
const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  //Calling eqObjects with the given parameters as objects can not be compared like primitive data types using ===
  if (eqObjects(object1, object2) === true) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};
