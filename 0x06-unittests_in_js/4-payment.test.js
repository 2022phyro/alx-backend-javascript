const sinon = require('sinon');

const chai = require('chai');

const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('checks that tsendPaymentRequest to api uses Utils.calculateNumber', () => {
    const CNSpy = sinon.stub(Utils, 'calculateNumber').returns(10);
    const CSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(CNSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(CSpy.calledWith('The total is: 10')).to.be.true;
    CNSpy.restore();
    CSpy.restore();
  });
});
