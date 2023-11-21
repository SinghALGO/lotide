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
module.exports = middle;
