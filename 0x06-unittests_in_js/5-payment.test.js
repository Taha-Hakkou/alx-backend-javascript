#!/usr/bin/node
// Uses 1 spy with hooks to test multiple cases
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    sinon.restore();
  });

  it('sendPaymentRequestToAPI(100, 20)', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(console.log.calledOnceWithExacly('The total is: 120')).to.be.true;
  });
  it('sendPaymentRequestToAPI(10, 10)', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(console.log.calledOnceWithExacly('Tha total is 20')).to.be.true;
  });
});
