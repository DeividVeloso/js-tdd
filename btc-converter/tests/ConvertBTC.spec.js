const nock = require('nock');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {

    let consoleStub;

    const responseMock = {
        "success": true,
        "time": "14-04-2016 13:55:32",
        "price": 9919.13
    };

    beforeEach(() => {
        consoleStub = sinon.stub(console, 'log');
    })

    afterEach(() => {
        consoleStub.restore();
    })

    it('should return USD as currency and 1 as amount default', async () => {
        //https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=2
         nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({ from: 'BTC', to: 'USD', amount: 1 })
            .reply(200, responseMock);

         await convertBTC();

        expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 9919.13');

    })

    it('should use currency USD and 10 as amount', async () => {
        //https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=2
         nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({ from: 'BTC', to: 'USD', amount: 10 })
            .reply(200, responseMock);

         await convertBTC('USD', 10);

        expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 9919.13');

    });

    it('should use currency BRL and 1 as amount', async () => {
        //https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=2
         nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({ from: 'BTC', to: 'BRL', amount: 1 })
            .reply(200, responseMock);

         await convertBTC('BRL');

        expect(consoleStub).to.have.been.calledWith('1 BTC to BRL = 9919.13');

    });


    it('should message user when api reply with error', async () => {
        //https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=2
         nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({ from: 'BTC', to: 'BRL', amount: 1 })
            .replyWithError('error');
      
         await convertBTC('BRL');

        expect(consoleStub).to.have.been.calledWith('Something went wrong in the API. Try in a few minutes');

    });
});