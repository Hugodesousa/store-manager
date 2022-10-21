const Joi = require('joi');

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

const validCreatSale = (list) => {
  list.map((sale) => {
  const { error } = parameterIsRequired.validate(sale);
    if (error !== undefined) {
      const { message, context } = error.details[0];
      
      return parameterNotFound(context.key, message);
    }

    return true;
});
  return true;
};

module.exports = {
  validCreatSale,
};