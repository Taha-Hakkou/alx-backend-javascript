#!/usr/bin/node
// Utils module

const Utils = {
  calculateNumber: function (type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    if (type === 'SUM') {
      return roundA + roundB;
    } else if (type === 'SUBSTRACT') {
      return roundA - roundB;
    } else if (type === 'DIVIDE') {
      return roundB === 0 ? 'Error' : roundA / roundB;
    }
  }
}

module.exports = Utils;
