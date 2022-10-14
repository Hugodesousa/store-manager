const { productsModel } = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.findAllProducts();
  return result;
};

const getProductsByID = async (id) => {
  const list = await productsModel.findAllProducts();
  const findID = list.some((el) => el.id === +id);
  if (findID) {
    const result = await productsModel.findProductsByID(id);
    return result;
  }
  return 'error';
};

module.exports = {
  getAllProducts,
  getProductsByID,
};