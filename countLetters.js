const countLetters = function (string) {
  let result = {};
  //Removing spaces between words in the string using .split(" ").join("")
  for (let i of string.split(" ").join("")) {
    if (result[i]) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  }
  return result;
};
module.exports = countLetters;
