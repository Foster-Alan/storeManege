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
  const arrSales = await req.body;
   const lengthArrSales = arrSales && arrSales.length;
  const resultValidation = await postSalesValidate(arrSales, lengthArrSales);
  if (resultValidation) return resultValidation;

  const id = await saleModel.postSales(arrSales);

  return { status: 201, response: { id, itemsSold: [...arrSales] } };
};

const deleteOneSale = async (req) => {
  const { id } = req.params;
  const existSale = await saleModel.getSaleById(id);
  if (!existSale) return { status: 404, response: { message: 'Sale not found' } };
  await saleModel.deleteById(id);
  return { status: 204 };
};

const putOneSale = async (req) => {
  const { id } = req.params;

  const arrSales = await req.body;
  const lengthArrSales = arrSales && arrSales.length;
  const resultValidation = await postSalesValidate(arrSales, lengthArrSales);
  if (resultValidation) return resultValidation;

  const saleProductExist = await saleModel.getSaleById(id);
  if (!saleProductExist) return { status: 404, response: { message: 'Sale not found' } };

  await saleModel.deleteSaleProductsById(id);
  await saleModel.postSaleUpdate(arrSales, id);

  return { status: 200, response: { saleId: id, itemsUpdated: arrSales } };
};

module.exports = {
  postMultipleSales,
   getAllSales,
  getOneSale,
  deleteOneSale,
  putOneSale,
};