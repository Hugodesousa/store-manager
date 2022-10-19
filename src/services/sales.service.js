const { salesModel, productsModel } = require('../models');
const { validCreatSale } = require('./utils/validationCreatSales');

const errorNotID = async (id) => {
  const test = await productsModel.findProductsByID(id);
  return test;
};

const creatSales = async (salesList) => { 
  console.log(validCreatSale(salesList));
  for (let index = 0; salesList.length > index; index += 1) {
    // const test = 
    const test = await errorNotID(salesList[index].productId);
    console.log('test', test);
    const error = new Error();
    if (!test) {
      error.message = 'Product not found';
      error.name = 'Product not found';
      error.status = 404;
      throw error;
    }
  }

  // salesList.map(async (sale) => {
  //   const test = await productsModel.findProductsByID(sale.productId);
  //   console.log('test', test);
  //   const error = new Error();
  //   if (!test) {
  //     error.message = 'Product not found';
  //     error.name = 'Product not found';
  //     error.status = 404;
  //     throw error;
  //   }
  // });
  if (validCreatSale(salesList)) {
    // console.log('aqui', validCreatSale(salesList));
    const result = await salesModel.insertSale(salesList);
    return result;
  }
  // const result = await salesModel.insertSale(salesList);
  // return result;
};

module.exports = {
  creatSales,
};