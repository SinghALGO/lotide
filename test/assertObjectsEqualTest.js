const assertObjectsEqual = require("../assertObjectsEqual");
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const multiColorShirtObject1 = {
  size: "medium",
  colors: ["red", "blue"],
};
assertObjectsEqual(multiColorShirtObject, multiColorShirtObject1);
