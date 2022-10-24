const { productsModel } = require('../models');
const { validationName } = require('./utils/validationName');
const { validationProductID } = require('./utils/validationProductID');

const getAllProducts = async () => {
  const result = await productsModel.findAllProducts();
  return result;
};

const getProductsByID = async (id) => {
  // console.log('aqui', typeof (id));
  const list = await productsModel.findAllProducts();
  if (validationProductID(list, id)) {
    const result = await productsModel.findProductsByID(id);
    return result;
  }
};

const postItem = async (newProduct) => {
  if (validationName(newProduct)) {
    const result = await productsModel.insertProducts(newProduct);
    return result;
  }
};

const deleteItem = async (id) => { 
  const list = await productsModel.findAllProducts();
  if (validationProductID(list, id)) {
    await productsModel.deleteProductByID(id);
  }
};

const editItem = async (newProduct) => { 
  const list = await productsModel.findAllProducts();
  if (validationProductID(list, newProduct.id)) {
    await productsModel.update(newProduct);
  }
};

module.exports = {
  getAllProducts,
  getProductsByID,
  postItem,
  deleteItem,
  editItem,
};