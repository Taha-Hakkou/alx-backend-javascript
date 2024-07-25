#!/usr/bin/node
// Tests calculateNumber function
const calculateNumber = require("./0-calcul");
const assert = require('assert');

describe('calculateNumber', () => {
  it("calculateNumber(1, 3)", () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("calculateNumber(1, 3.7)", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("calculateNumber(1.2, 3.7)", () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("calculateNumber(1.5, 3.7)", () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
