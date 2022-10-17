const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/db/connection');
const { productsModel } = require('../../../src/models');
const { products } = require('../../mocks/products.model.mock');

describe('Testa o redorno das funções findAllProducts e findProductsByID', () => {
  
  it('Testa o redorno da função findAllProducts', async () => {
    sinon.stub(connection, 'execute').resolves([products]);
    const getList = await productsModel.findAllProducts();
    expect(getList).to.be.deep.equal(products);
  });
  
  it('Testa o redorno da função findProductsByID', async () => {
    sinon.stub(connection, 'execute').resolves([[products[1]]]);
    const getProduct = await productsModel.findProductsByID(2);
    expect(getProduct).to.be.deep.equal(products[1]);
  });

  afterEach(sinon.restore);

});

describe('', () => {

  it('', async () => {
    sinon.stub(connection, 'execute').resolves(products);
    const newProduct = {
      "name": "ProdutoX"
    };
    const insert = await productsModel.insertProducts(newProduct);
    expect(insert).to.be.deep.equal(insert);
  });


  afterEach(sinon.restore);

});