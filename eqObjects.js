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

// Function that takes two objects(key:value), deep comapres them and returns a boolean
const eqObjects = function (object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  // Case when objects do not have the same amount of keys
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  } else {
    for (let i in object1) {
      // Case when the value is an array on both looped object elements
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        let result = eqArrays(object1[i], object2[i]);
        if (!result) {
          return false;
        }
      } else if (
        //Case when the value is an object on both looped object elements
        typeof object1[i] === "object" &&
        typeof object2[i] === "object"
      ) {
        let res = eqObjects(object1[i], object2[i]);
        if (!res) {
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
