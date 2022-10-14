const { expect } = require('chai');
const sinon = require('sinon');

const { productsService } = require('../../../src/services');

const { productsModel } = require('../../../src/models');

const { products } = require('../../mocks/products.model.mock');

describe('', () => { 
  it('', async () => { 
    const allProduct = await productsService.getAllProducts();
    console.log(allProduct);
    expect(allProduct).to.deep.equal(products)
  });
});