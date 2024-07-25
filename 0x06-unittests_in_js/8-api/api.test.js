#!/usr/bin/node
// Tests response of endpoints in express server
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / responds correctly', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
