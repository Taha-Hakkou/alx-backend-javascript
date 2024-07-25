#!/usr/bin/node
// Tests the math used for 2 functions
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const utilsSpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be(true);
    sinon.restore();
  });
});
