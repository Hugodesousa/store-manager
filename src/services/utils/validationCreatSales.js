const Joi = require('joi');
// const { productsModel } = require('../../models');

const parameterIsRequired = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

const parameterNotFound = (key, message) => {
  const error = new Error();
  switch (message) {
    case '"quantity" must be greater than or equal to 1':
      error.message = '"quantity" must be greater than or equal to 1';
      error.name = 'quantity small';
      error.status = 422;
      throw error;
    default:
      error.message = `"${key}" is required`;
      error.name = 'parameter is not found';
      error.status = 400;
      throw error;
  }
};

// const findID = async (id) => { 
//   const test = await productsModel.findProductsByID(toString(id));
//   if (!test) {
//     const error = new Error('Product not found');
//     error.name = 'Product not found';
//     error.status = 422;
//     throw error;
//   }
// };
const validCreatSale = (list) => {
const validate = list.map((sale) => {
  // findID(sale.productId);
  const { error } = parameterIsRequired.validate(sale);
  // const ids.data = 
  // console.log(sale.productId);
    if (error !== undefined) {
      const { message, context } = error.details[0];
      
      return parameterNotFound(context.key, message);
    }

    return true;
});
  return validate;
};

// list.forEach((element) => {
//   if (!element.productId) { 
//     const error = new Error('"productId" is required');
//     error.name = 'product ID not found';
//     error.status = 400;
//     throw error;
//   }
//   if (!element.quantity) {
//     const error = new Error('"quantity" is required');
//     error.name = 'quantity not found';
//     error.status = 400;
//     throw error;
//   }
//   if (element.quantity <= 0) {
//     const error = new Error('"quantity" must be greater than or equal to 1');
//     error.name = 'quantity small';
//     error.status = 422;
//     throw error;
//   } 
//   if (element.productId <= 0) {
//     const error = new Error('"quantity" must be greater than or equal to 1');
//     error.name = 'quantity small';
//     error.status = 422;
//     throw error;
//   }
// });
// return true;

module.exports = {
  validCreatSale,
};