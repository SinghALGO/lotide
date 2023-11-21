const assert = require("chai").assert;
const without = require("../without");
describe("#Without", () => {
  it("returns [ 'hello', 'world' ] for ['hello', 'world', 'lighthouse'] and ['lighthouse']", () => {
    assert.deepEqual(
      without(["hello", "world", "lighthouse"], ["lighthouse"]),
      ["hello", "world"]
    );
  });
});
