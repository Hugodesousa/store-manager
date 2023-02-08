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
  const list = await salesModel.findAllSales();
  const findID = list.some((el) => el.saleId === +id);
  if (!findID) {
    const error = new Error('Sale not found');
    error.name = 'Sale not found';
    error.status = 404;
    throw error;
  }
  const result = await salesModel.findSalesByID(id);
  return result;
};

const deleteSale = async (id) => {
  const result = await salesModel.deleteSale(id);
  if (result === 'not foud') {
    const error = new Error('Sale not found');
    error.name = 'Sale not found';
    error.status = 404;
    throw error;
  }
};

module.exports = {
  creatSales,
  getAllSales,
  getSalesByID,
  deleteSale,
};