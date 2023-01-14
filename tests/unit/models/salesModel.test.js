const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales, mockArrAllSales } = require("../mocks/mockSales");

const connection = require("../../../src/models/connection");
const { postSales, getAll } = require("../../../src/models/saleModel");

describe('Unit Test - salesModels', () => {
  describe('Post sales', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{ insertId: 10 }]);

      await postSales(mockArrSales);
    })
  })
  describe('Get all sales', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockArrAllSales);

      await getAll();
    })
  })
  afterEach(sinon.restore);
})