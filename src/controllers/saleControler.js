const { saleService } = require('../services');

const postMultipleSales = async (req, res) => {
  const { status, response } = await saleService.postMultipleSales(req);
  res.status(status).json(response);
};

module.exports = {
  postMultipleSales,
};