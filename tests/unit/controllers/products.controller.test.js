const sinon = require('sinon');
const { products } = require('../../mocks/products.model.mock');
const sinonChai = require('sinon-chai')
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const chai = require('chai');
const { expect } = require('chai');
chai.use(sinonChai);
describe('Testa o retorno da camada controler', () => {
  const res = {}
  const req = {} 
  before(() => {
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(products)
    sinon.stub(productsService, 'getAllProducts').resolves(products)
  });
  after(() => {
    sinon.restore();
  })
  it('Testa o retorno da função "getAllProducts"', async () => {

    const allProduct = await productsController.allProducts(req, res);
    // console.log('sdf', allProduct);
    expect(allProduct).to.deep.equal(products)
  });

});

describe('testa busca por id na camada controller', () => {
  const res = {};
  const req = {};
  before(() => {
    req.params = { id: 1 }
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(products)
    sinon.stub(productsService, 'getProductsByID').resolves(products[0])
  });
  after(() => {
    sinon.restore();
  })
  it('Testa o retorno da função "productsByID"', async () => { 
    const productById = await productsController.productbyID(req, res);
    console.log('0', products[0]);
    console.log('prod', productById);
    expect(res.status).to.have.been.calledWith(200)
  });
});