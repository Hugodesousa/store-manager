const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/db/connection');
const { productsModel } = require('../../../src/models');
const { products } = require('./mocks/products.model.mock');

describe('Testa o redorno dos produtos cadastrados com os endpoints "/products" e "/products/:id"', () => {
  
  it('Testa se todos os produtos da lista são retornados no endpoint "/products"', async () => {
    sinon.stub(connection, 'execute').resolves(products);
    const getList = await productsModel.findAllProducts();
    expect(getList).to.be.equal(products);
  });
  
  it('Testa um unico produto e retornados no endpoint "/products/:id"', async () => {
    sinon.stub(connection, 'execute').resolves(products[1]);
    const getProduct = await productsModel.findProductsByID(2);
    expect(getProduct).to.be.deep.equal(products[1]);
  });

  afterEach(sinon.restore);

});