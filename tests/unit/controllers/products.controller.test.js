const sinon = require('sinon');
const { products } = require('../../mocks/products.model.mock');
const sinonChai = require('sinon-chai')
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const chai = require('chai');
const { expect } = require('chai');
chai.use(sinonChai);
describe('Testa o retorno da da função "getAllProducts" na camada controler', () => {
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
  it('Testa se e retornada a lista com todos os produtos', async () => {

    const allProduct = await productsController.allProducts(req, res);
    expect(allProduct).to.deep.equal(products)
  });

});

describe('Testa busca por id na camada controller', () => {
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
    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(products[0])
  });
});

describe('Testa a inserção de um produto na camada controller', () => {
  const res = {};
  const req = {};
  before(() => {
    req.body = {
      "name": "ProdutoE"
    }
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(products)
    sinon.stub(productsService, 'postItem').resolves(products[0])
  });
  after(() => {
    sinon.restore();
  })
  it('Testa o retorno da função "postProduct"', async () => {
    const productById = await productsController.postProduct(req, res);
    expect(res.status).to.have.been.calledWith(201)
    expect(res.json).to.have.been.calledWith(products[0])
  });
});