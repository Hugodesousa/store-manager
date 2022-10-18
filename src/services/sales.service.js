const { salesModel } = require('../models');
const { validCreatSale } = require('./utils/validationCreatSales');

const creatSales = async (salesList) => { 
  console.log(validCreatSale(salesList));
  if (validCreatSale(salesList)) {
    const result = await salesModel.insertSale(salesList);
    return result;
  }
  // const result = await salesModel.insertSale(salesList);
  // return result;
};

module.exports = {
  creatSales,
};