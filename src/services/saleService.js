const { saleModel } = require('../models');
const { postSalesValidate } = require('./validations/validate');

const getAllSales = async () => {
  const sales = await saleModel.getAll();
  return { status: 200, response: sales };
};

const getOneSale = async (req) => {
  const { id } = req.params;
  const sale = await saleModel.getById(id);
  if (sale && !sale.length) return { status: 404, response: { message: 'Sale not found' } };
  return { status: 200, response: sale };
};

const postMultipleSales = async (req) => {
  const arrSales = req.body;
   const lengthArrSales = arrSales && arrSales.length;
  const resultValidation = await postSalesValidate(arrSales, lengthArrSales);
  if (resultValidation) return resultValidation;

  const id = await saleModel.postSales(arrSales);

  return { status: 201, response: { id, itemsSold: [...arrSales] } };
};

module.exports = {
  postMultipleSales,
   getAllSales,
  getOneSale,
};