const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales } = require("../mocks/mockSales");

const connection = require("../../../src/models/connection");
const { postSales } = require("../../../src/models/saleModel");

describe('Test - saleModels', () => {
  describe('Post sales', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{ insertId: 10 }]);

      await postSales(mockArrSales);
    })
  })
  afterEach(sinon.restore);
})