const letterPositions = function (sentence) {
  const results = {};
  for (let i in sentence) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        //push index of the element to the value array
        results[sentence[i]].push(Number(i));
      } else {
        //add an array with index of the element as the value for key
        results[sentence[i]] = [Number(i)];
      }
    }
  }
  return results;
};
module.exports = letterPositions;
