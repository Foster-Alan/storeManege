const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales } = require("../mocks/mockSales");

const { saleService } = require("../../../src/services");
const { postMultipleSales } = require("../../../src/controllers/saleControler");

describe('Test salesController', () => {
	describe('Post  sales', () => {
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
})