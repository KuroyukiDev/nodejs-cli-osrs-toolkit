const utils = require('./../number-formatter');
const items = require('./items-scraper').itemData;

const getHighAlchProfit = (term, amount) => {
   const haVal = items.find(item => {
      if (item.name.toLowerCase() === term.toLowerCase() && item.noted === false) {
         return item;
      }
      
   });
   
   // console.log(haVal.highalch);
   return amount * haVal.highalch;
};

const getHighAlchPrice = (term) => {
   const haVal = items.find(item => {
      if (item.name.toLowerCase() === term.toLowerCase() && item.noted === false) {
         return item;
      }
      
   });
   
   // console.log(haVal.highalch);
   return haVal.highalch;
};

const getAlchingProfitStatus = (mode, term, itemPrice, amount) => {
   switch (mode) {
      case 'ha':
         let haItem = items.find(item => {
            if (item.name.toLowerCase() === term.toLowerCase() && item.noted === false) {
               return item;
            }
      
         });
         return ((haItem.highalch * amount) - (utils.stripCommas(itemPrice) * amount));
      case 'la':
         let laItem = items.find(item => {
            if (item.name.toLowerCase() === term.toLowerCase() && item.noted === false) {
               return item;
            }
      
         });
         return ((laItem.lowalch * amount) - (utils.stripCommas(itemPrice) * amount));
   }
   
};


module.exports = {
   getHighAlchProfit,
   getHighAlchPrice,
   getAlchingProfitStatus
};