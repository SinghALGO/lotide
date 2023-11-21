const findKey = (object, callback) => {
  let arr = Object.keys(object);
  for (let i of arr) {
    let res = callback(object[i]);
    if (res === true) {
      return i;
    }
  }
  return;
};
module.exports = findKey;
