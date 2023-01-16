const { saleService } = require('../services');

const getAllSales = async (req, res) => {
  const { status, response } = await saleService.getAllSales();
  res.status(status).json(response);
};

const getOneSale = async (req, res) => {
  const { status, response } = await saleService.getOneSale(req);
  res.status(status).json(response);
};

const postMultipleSales = async (req, res) => {
  const { status, response } = await saleService.postMultipleSales(req);
  res.status(status).json(response);
};

const deleteOneSale = async (req, res) => {
  const { status, response } = await saleService.deleteOneSale(req);
  res.status(status).json(response);
};

module.exports = {
  postMultipleSales,
  getAllSales,
  getOneSale,
  deleteOneSale,
};