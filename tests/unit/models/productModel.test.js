const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAllProducts, mockGetOneProduct } = require("../mocks/mockProducts");

const connection = require("../../../src/models/connection");
const { getAll, getById, post } = require("../../../src/models/productModel");

describe('Test - productsModels', () => {
	describe('Get all products', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockGetAllProducts);

      await getAll();
		})
  })
  
	describe('Get one product', () => {
		it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([[mockGetOneProduct]]);

      await getById(1);
		})
  })
  
  describe('Post product', () => {
		it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([1]);

      await post({ name: 'Product X' });
		})
  })
  
  afterEach(sinon.restore);
})