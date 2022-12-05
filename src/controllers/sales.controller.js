const { salesService } = require('../services');

const postSales = async (req, res) => {
  const result = await salesService.creatSales(req.body);
  return res.status(201).json(result);
};

const allSales = async (_req, res) => { 
  const result = await salesService.getAllSales();
  return res.status(200).json(result);
};

const saleByID = async (req, res) => {
  const result = await salesService.getSalesByID(+req.params.id);
  return res.status(200).json(result);
};

const deleteSale = async (req, res) => { 
  await salesService.deleteSale(+req.params.id);
  return res.status(204).end();
};

module.exports = {
  postSales,
  allSales,
  saleByID,
  deleteSale,
};