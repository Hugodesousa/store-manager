const { salesService } = require('../services');

const postSales = async (req, res) => {
  const result = await salesService.creatSales(req.body);
  return res.status(201).json(result);
};

module.exports = {
  postSales,
};