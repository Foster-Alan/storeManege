const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockArrProductsForSale, mockArrSales, mockArrProductIdNotExist, mockArrQuantityNotExist,
  mockArrQuantitySmallerZero, mockArrProductsNotExist
} = require("../mocks/mockSales");

const { saleModel } = require("../../../src/models");
const { postMultipleSales } = require("../../../src/services/saleService");
const { postSalesValidate } = require("../../../src/services/validations/validate");

describe('Test - saleServices', () => {
  describe('validation', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrSales);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrProductIdNotExist);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantityNotExist);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantitySmallerZero);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsNotExist);

      await postSalesValidate(mockArrSales);
    })
  })

  describe('Post sales', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'postSales')
        .resolves({ insertId: 10 });
      await postMultipleSales(mockArrSales);
    })
  })

      

  afterEach(sinon.restore);
})