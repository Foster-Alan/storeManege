const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales, mockArrAllSales } = require("../mocks/mockSales");

const { saleService } = require("../../../src/services");
const { postMultipleSales, getAllSales, getOneSale, mockArrOneSale } = require("../../../src/controllers/saleControler");

describe('Test - salesController', () => {
	describe('Post sales', () => {
		it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'postMultipleSales')
        .resolves({ status: 201, response: { id: 1, itemsSold: [...mockArrSales] } });

      await postMultipleSales(req, res);
		})
	})
  describe('Get all sales', () => {
    it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'getAllSales')
        .resolves({ status: 200, response: mockArrAllSales });

      await getAllSales(req, res);
    })
  })
	describe('Get one sale by Id', () => {
		it('{', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'getOneSale')
        .resolves({ status: 200, response: mockArrOneSale });

      await getOneSale(req, res);
		})
	})
})