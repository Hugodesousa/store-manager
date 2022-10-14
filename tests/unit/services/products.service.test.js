const { expect } = require('chai');
const sinon = require('sinon');

const { productsService } = require('../../../src/services');

const { productsModel } = require('../../../src/models');

const { products } = require('../../mocks/products.model.mock');

describe('Testa o retorno da camada service', () => {
  before(() => {
    sinon.stub(productsModel, 'findAllProducts').resolves(products)
  });
  after(() => {
    sinon.restore();
  })
  it('Testa o retorno da função "getAllProducts"', async () => {
    const allProduct = await productsService.getAllProducts();
    expect(allProduct).to.deep.equal(products)
  });
  


});

describe('testa busca por id na camada service', () => {
  before(() => {
    sinon.stub(productsModel, 'findAllProducts').resolves(products)
    sinon.stub(productsModel, 'findProductsByID').resolves(products[0])
  });
  after(() => {
    sinon.restore();
  })
  it('Testa o retorno da função "getProductsByID"', async () => {
    const productById = await productsService.getProductsByID(1);
    expect(productById).to.deep.equal(products[0])
  });

})