#!/usr/bin/node
// Tests usage of console.log using a spy & a stub
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    sinon.restore();
  });
});
