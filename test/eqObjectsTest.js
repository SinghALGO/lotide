const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    assert.equal(
      eqObjects(
        { color: "red", size: "medium" },
        { size: "medium", color: "red" }
      ),
      true
    );
  });
  it("returns true for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'], }", () => {
    assert.equal(
      eqObjects(
        { colors: ["red", "blue"], size: "medium" },
        {
          size: "medium",
          colors: ["red", "blue"],
        }
      ),
      true
    );
  });
  it("returns true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.equal(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      false
    );
  });
});
