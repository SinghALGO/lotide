const assert = require("chai").assert;
const map = require("../map");
describe("#Map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control','to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"]), [
      "g",
      "c",
      "t",
      "m",
      "t",
    ]);
  });
});
