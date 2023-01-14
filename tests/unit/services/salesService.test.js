

const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockArrProductsForSale, mockArrSales, mockArrProductIdNotExist, mockArrQuantityNotExist,
  mockArrQuantitySmallerZero, mockArrProductsNotExist, mockArrAllSales, mockArrOneSale
} = require("../mocks/mockSales");
const { postSalesValidate } = require("../../../src/services/validations/validate");

const { saleModel } = require("../../../src/models");
const { getAllSales, getOneSale } = require("../../../src/services/saleService");

describe('Unit Test - salesServices', () => {
	describe('validation', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrSales, mockArrSales.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrProductIdNotExist, mockArrProductIdNotExist.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantityNotExist, mockArrQuantityNotExist.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantitySmallerZero, mockArrQuantitySmallerZero.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllProductsSale')
        .resolves(mockArrProductsNotExist);

      await postSalesValidate(mockArrSales, mockArrSales.length);
    })
  })

  describe('Get all sales', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'getAll')
        .resolves(mockArrAllSales);

      await getAllSales();
    })
  })
  describe('Get sale by id', () => {
    it('', async () => {
      req = {
        params: { id: 1 }
      }
      sinon
        .stub(saleModel, 'getById')
        .resolves(mockArrOneSale);

      await getOneSale(req);
    })
    it('', async () => {
      req = {
        params: { id: 99999 }
      }
      sinon
        .stub(saleModel, 'getById')
        .resolves([]);

      await getOneSale(req);
    })
  })
  afterEach(sinon.restore);
})