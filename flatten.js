//Function takes in an array and returns an array
const flatten = function (arr) {
  let array = [];
  for (let i of arr) {
    //case when the element is an array
    if (Array.isArray(i)) {
      //spread syntax used on nested array
      array.push(...i);
    } else {
      array.push(i);
    }
  }
  return array;
};
module.exports = flatten;
