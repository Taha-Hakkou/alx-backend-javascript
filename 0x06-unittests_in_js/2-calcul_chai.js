#!/usr/bin/node
// Sums rounds of 2 numbers

const calculateNumber = (type, a, b) => {
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

module.exports = calculateNumber;
