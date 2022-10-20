const { salesModel, productsModel } = require('../models');
const { validCreatSale } = require('./utils/validationCreatSales');

const checkValidID = async (salesList) => { 
  const findProduct = salesList.map((sale) =>
    productsModel.findProductsByID(sale.productId));
  const resultProduct = await Promise.all(findProduct);
  console.log('result', resultProduct);

  const checkResult = resultProduct.some((value) => typeof value !== 'object');
  console.log('check', checkResult);
  if (checkResult) {
    const error = new Error('Product not found');
    error.name = 'Product not found';
    error.status = 404;
    throw error;
  }
  return true;
};

const creatSales = async (salesList) => {
  // for (let index = 0; salesList.length > index; index += 1) {
  //   // const test =
  //   const test = await productsModel.findProductsByID(salesList[index].productId);
  //   const error = new Error();
  //   if (!test) {
  //     error.message = 'Product not found';
  //     error.name = 'Product not found';
  //     error.status = 404;
  //     throw error;
  //   }
  // }

  if (validCreatSale(salesList)) {
    // console.log('aqui', validCreatSale(salesList));
    await checkValidID(salesList);
    const result = await salesModel.insertSale(salesList);
    return result;
  }
  // const result = await salesModel.insertSale(salesList);
  // return result;
};

module.exports = {
  creatSales,
};