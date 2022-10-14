const { productsService } = require('../services');

const allProducts = async (_req, res) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

const productbyID = async (req, res) => {
  const result = await productsService.getProductsByID(req.params.id);
  console.log('result', result);
  if (result === 'error') {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(result);
};

module.exports = {
  allProducts,
  productbyID,
};