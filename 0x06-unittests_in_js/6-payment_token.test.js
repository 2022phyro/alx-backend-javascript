const { expect } = require('chai');

const gApi = require('./6-payment_token');

describe('Async testing', () => {
    it('Testing the value True', (done) => {
        gApi(true)
        .then((result) => {
          expect(result).to.deep.equal({ data: 'Successful response from the API' });
          done();
        })
        .catch(done); 
    });
    
});
