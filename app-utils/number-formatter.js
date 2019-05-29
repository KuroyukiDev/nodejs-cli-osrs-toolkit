const stripCommas = (num) => {
   if (num.toString().includes(',')) {
      num = num.replace(',', '');
      return Number(num);
   } else if (num.toString().includes('m')) {
      num = num.replace('m', '');
      num = num.replace('.', '');
      if (num.toString().length > 1) {
         num *= 100000;
      } else {
         num *= 1000000;
      }
      return Number(num);
      
   } else if (num.toString().includes('k')) {
      num = num.replace('k', '');
      num = num.replace('.', '');
      if (num.toString().length > 1) {
         num *= 100;
      } else {
         num *= 1000;
      }
      return Number(num);
      
   } else {
      return num;
   }
};

const addCommas = (num) => {
   return num.toLocaleString('en-US');
};

module.exports = {
   stripCommas,
   addCommas
};