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
  it('GET /cart/:id responds correctly for valid id', (done) => {
    request.get(`${API_URL}/cart/48`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 48');
      done();
    });
  });
  it('GET /cart/:id returns 404 code for negative number values in id', (done) => {
    request.get(`${API_URL}/cart/-48`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('GET /cart/:id returns 404 code for non-numeric values in id', (done) => {
    request.get(`${API_URL}/cart/a001-b002-c003`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('POST /login responds correctly', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });
  it('GET /available_payments responds correctly', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  })
});
