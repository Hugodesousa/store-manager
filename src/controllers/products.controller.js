const { productsService } = require('../services');

const allProducts = async (_req, res) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

const productbyID = async (req, res) => {
  const result = await productsService.getProductsByID(req.params.id);
  return res.status(200).json(result);
};

const postProduct = async (req, res) => {
  const result = await productsService.postItem(req.body);
  return res.status(201).json(result);
};

module.exports = {
  allProducts,
  productbyID,
  postProduct,
};