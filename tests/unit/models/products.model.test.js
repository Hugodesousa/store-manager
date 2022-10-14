const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/db/connection');
const { productsModel } = require('../../../src/models');
const { products } = require('../../mocks/products.model.mock');

describe('Testa o redorno das funções findAllProducts e findProductsByID', () => {
  
  it('Testa o redorno da função findAllProducts', async () => {
    sinon.stub(connection, 'execute').resolves([products]);
    const getList = await productsModel.findAllProducts();
    console.log(getList);
    expect(getList).to.be.deep.equal(products);
  });
  
  it('Testa o redorno da função findProductsByID', async () => {
    sinon.stub(connection, 'execute').resolves([[products[1]]]);
    const getProduct = await productsModel.findProductsByID(2);
    expect(getProduct).to.be.deep.equal(products[1]);
  });

  afterEach(sinon.restore);

});