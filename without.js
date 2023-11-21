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
module.exports = without;
