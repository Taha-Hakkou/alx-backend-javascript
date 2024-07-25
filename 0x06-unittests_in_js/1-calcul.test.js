#!/usr/bin/node
// Tests calculateNumber function
const calculateNumber = require("./1-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
  it("calculateNumber('SUM', 1.4, 4.5)", () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it("calculateNumber('SUBSTRACT', 1.4, 4.5)", () => {
    assert.equal(calculateNumber('SUBSTRACT', 1.4, 4.5), -4);
  });
  it("calculateNumber('DIVIDE', 1.4, 4.5)", () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("calculateNumber('DIVIDE', 1.4, 0)", () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
