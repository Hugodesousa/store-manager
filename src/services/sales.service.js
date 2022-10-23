const { salesModel, productsModel } = require('../models');
const { validCreatSale } = require('./utils/validationCreatSales');

const checkValidID = async (salesList) => { 
  const findProduct = salesList.map((sale) =>
    productsModel.findProductsByID(sale.productId));
  const resultProduct = await Promise.all(findProduct);
  const checkResult = resultProduct.some((value) => typeof value !== 'object');
  if (checkResult) {
    const error = new Error('Product not found');
    error.name = 'Product not found';
    error.status = 404;
    throw error;
  }
  return true;
};

const creatSales = async (salesList) => {
  if (validCreatSale(salesList)) {
    await checkValidID(salesList);
    const result = await salesModel.insertSale(salesList);
    return result;
  }
};

const getAllSales = async () => { 
  const result = await salesModel.findAllSales();
  return result;
};

const getSalesByID = async (id) => {
  const result = await salesModel.findSalesByID(id);
  return result;
};

module.exports = {
  creatSales,
  getAllSales,
  getSalesByID,
};
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