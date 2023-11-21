const map = function (array, callback = (word) => word[0]) {
  const results = [];
  for (let item of array) {
    //push return value of the callback function
    results.push(callback(item));
  }
  return results;
};
module.exports = map;