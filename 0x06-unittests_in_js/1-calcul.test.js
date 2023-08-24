const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should round and sum two integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should round and sum an integer and a float', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should round and sum two floats', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should round and sum two floats with decimal part .5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should round and sum two integers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it('should round and subtract an integer and a float', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });

  it('should round and subtract two floats', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });

  it('should round and subtract two floats with decimal part .5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should round and divide two integers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
  });

  it('should round and divide an integer by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });

  it('should round and divide two floats', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.3, 2.7), 2);
  });

  it('should round and divide two floats with decimal part .5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
});
