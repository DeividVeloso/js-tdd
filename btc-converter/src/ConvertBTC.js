const request = require('request-promise-native');

async function convertBTC(currency = 'USD', amount = 1) {
    console.log("XX", amount)
    const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

    await request(url)
    .then((body) => {
        const apiResponse = JSON.parse(body);
        console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
      })
}
module.exports = convertBTC;