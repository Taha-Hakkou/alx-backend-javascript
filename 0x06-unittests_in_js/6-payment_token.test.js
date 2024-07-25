#!/usr/bin/node
// Tests getPaymentTokenFromAPI function
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(true)', () => {
    expect(getPaymentTokenFromAPI(true)).to.be({
      data: 'Successful response from the API'
    });
    done();
  });
});
