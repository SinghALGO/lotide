const takeUntil = function (array, callback) {
  let result = [];
  for (let i of array) {
    let res = callback(i);
    if (!res) {
      result.push(i);
    } else {
      break;
    }
  }
  return result;
};
