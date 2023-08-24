const chai = require('chai');

const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  it('should round and sum two integers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('should round and sum an integer and a float', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('should round and sum two floats', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  it('should round and sum two floats with decimal part .5', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should round and subtract two integers', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  it('should round and subtract an integer and a float', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it('should round and subtract two floats', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  it('should round and subtract two floats with decimal part .5', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should round and divide two integers', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });

  it('should round and divide an integer and zero', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });

  it('should round and divide two floats', () => {
    expect(calculateNumber('DIVIDE', 6.3, 2.7)).to.equal(2);
  });

  it('should round and divide two floats with decimal part .5', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
});
