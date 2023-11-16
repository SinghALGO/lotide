const inputArray = process.argv.slice(2);

const reverse = function(string) {
  let reversedStr = "";
  for (let i of string) {
    reversedStr = i + reversedStr;
  }
  return reversedStr;
};

for (let str of inputArray) {
  let reversedString = reverse(str);
  console.log(reversedString);
}
