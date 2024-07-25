#!/usr/bin/node
// Returns a resolved promise with object

const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return new Promise(() => {
      resolve({data: 'Successful response from the API' });
    });
  }
}

module.exports = getPaymentTokenFromAPI;
