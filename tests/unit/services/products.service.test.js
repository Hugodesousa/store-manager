const { expect, use } = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
use(chaiAsPromised); 

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

describe('testa erros', () => {
  before(() => {
    sinon.stub(productsModel, 'findAllProducts').resolves(products)
    // sinon.stub(productsModel, 'findProductsByID').resolves([])
  });
  after(() => {
    sinon.restore();
  })
  it('', async () => {
    try {
      await productsService.getProductsByID(5);
    } catch (error) {

      expect(error.message).to.be.equal('Product not found');
    }
  });
  //return promise.should.be.rejected;
})