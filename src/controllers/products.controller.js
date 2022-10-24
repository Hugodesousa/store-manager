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

const deleteProduct = async (req, res) => { 
  await productsService.deleteItem(+req.params.id);
  return res.status(204).end();
};

const updateProduct = async (req, res) => { 
  const { body, params } = req;
  const newProduct = {
    id: +params.id,
    name: body.name,
  };
  const result = await productsService.editItem(newProduct);
  return res.status(200).json(result);
};

module.exports = {
  allProducts,
  productbyID,
  postProduct,
  deleteProduct,
  updateProduct,
};