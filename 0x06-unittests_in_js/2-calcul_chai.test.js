#!/usr/bin/node
// Tests calculateNumber function
const calculateNumber = require("./2-calcul_chai");
const { expect } = require('chai');

describe('calculateNumber', () => {
  it("calculateNumber('SUM', 1.4, 4.5)", () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it("calculateNumber('SUBSTRACT', 1.4, 4.5)", () => {
    expect(calculateNumber('SUBSTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it("calculateNumber('DIVIDE', 1.4, 4.5)", () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it("calculateNumber('DIVIDE', 1.4, 0)", () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
