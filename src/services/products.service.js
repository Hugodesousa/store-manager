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
  const error = new Error('Product not found');
  error.name = 'Not found error';
  error.status = 404;
  throw error; 
};

const postItem = async (newProduct) => {
  // console.log('aqui', newProduct);
  // console.log('length', newProduct.name.length);
  if (!newProduct.name) {
    // console.log('if');
    const error = new Error('"name" is required');
    error.name = 'name not found';
    error.status = 400;
    throw error;
  }
  if (newProduct.name.length < 5) {
    const error = new Error('"name" length must be at least 5 characters long');
    error.name = 'name is small';
    error.status = 422;
    throw error;
  }
  const result = await productsModel.insertProducts(newProduct);
  return result;
};

module.exports = {
  getAllProducts,
  getProductsByID,
  postItem,
};