const sinon = require('sinon');

const chai = require('chai');

const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('checks that tsendPaymentRequest to api uses Utils.calculateNumber', () => {
    const CNSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(CNSpy.calculateNumber.calledOnce).to.be.true;
    expect(CNSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    CNSpy.calculateNumber.restore();
  });
});
