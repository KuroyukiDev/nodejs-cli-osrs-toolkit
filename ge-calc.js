const osrs = require('osrs-wrapper');
const yargs = require('yargs');
const utils = require('./app-utils/number-formatter');
const itemJSONUtils = require('./app-utils/json-utils/item-json-utils');

const argv = yargs
   .options({
      search: {
         demand: true,
         alias: 's',
         describe: 'Item name for search term',
         string: true
      },
      amount: {
         demand: false,
         alias: 'x',
         describe: 'Amount of the item you want to sell',
         string: true
      }
   })
   .help()
   .alias('help', 'h')
   .argv;

let term = argv.search;
let amount = argv.amount;

const searchOnly = (term) => {
   osrs.ge.getItem(term)
      .then((res) => {
         const data = JSON.parse(res);
         console.log(`\n\t Price per ${term}: [ ${utils.addCommas(utils.stripCommas(data.item.current.price))} GP ]`);
         console.log(`\n\t HA Value: [ ${utils.addCommas(itemJSONUtils.getHighAlchPrice(term))} GP ]`);
         console.log(`\n\t HA Gain/Loss: [ ${utils.addCommas(itemJSONUtils.getAlchingProfitStatus('ha', term, data.item.current.price, 1))} GP ]`);
      })
      .catch(() => {
         console.log('Item not found. Check spelling and try again.');
      });
};

const searchAndCalc = (term, amount) => {
   osrs.ge.getItem(term)
      .then((res) => {
         const data = JSON.parse(res);
         console.log(`\n>> The Value Of [ ${amount} ] ${term} in GE:`);
         console.log(`\n\t GE Profit: [ ${amount} @ ${utils.addCommas(utils.stripCommas(data.item.current.price))} GP ea. ] = ${utils.addCommas(utils.stripCommas(data.item.current.price) * amount)} GP`);
         console.log(`\n\t HA Profit: [ ${amount} @ ${utils.addCommas(itemJSONUtils.getHighAlchPrice(term))} GP ea. ] = ${utils.addCommas(itemJSONUtils.getHighAlchProfit(term, amount))} GP`);
         console.log(`\n\t HA Gain/Loss: [ ${utils.addCommas(itemJSONUtils.getAlchingProfitStatus('ha', term, data.item.current.price, amount))} GP ]`);
         // console.log(`\t >> Price per unit: [ ${data.item.current.price} ]`);
      })
      .catch(() => {
         console.log('Item not found. Check spelling and try again.');
      });
};

if (!amount || amount.trim() === '') {
   searchOnly(term);
} else {
   searchAndCalc(term, amount);
}