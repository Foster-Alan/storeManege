const { saleModel } = require('../models');
const { postSalesValidate } = require('./validations/validate');

const postMultipleSales = async (req) => {
  const arrSales = req.body;
  const resultValidation = await postSalesValidate(arrSales);
  if (resultValidation) return resultValidation;

  const id = await saleModel.postSales(arrSales);

  return { status: 201, response: { id, itemsSold: [...arrSales] } };
};

module.exports = {
  postMultipleSales,
};