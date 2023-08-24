import Utils from './utils';

const sinon = require('sinon');

const chai = require('chai');

const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('checks that tsendPaymentRequest to api uses Utils.calculateNumber', () => {
    const calculateNumberSpy = sinon.spy();

    // Replace the actual Utils.calculateNumber with the spy
    const calc = Utils.calculateNumber;
    Utils.calculateNumber = calculateNumberSpy;

    // Call the function to be tested
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the original Utils.calculateNumber function
    Utils.calculateNumber = calc;
  });
});
