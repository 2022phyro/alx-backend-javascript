const sinon = require('sinon');

const chai = require('chai');

const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

const Utils = require('./utils');

describe('using hooks', () => {
  let CSpy;

  beforeEach(() => {
    CSpy = sinon.spy(console, 'log');
  });

  // After each test
  afterEach(() => {
    expect(CSpy.calledOnce).to.be.true;
    CSpy.restore();
  });
  it('checks that calling with 100 and 20 logs 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(CSpy.calledWith('The total is: 120'));
  });

  it('checks that calling with 10 and 10 logs 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(CSpy.calledWith('The total is: 20'));
  });
});
