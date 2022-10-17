const validationName = (newProduct) => {
  if (!newProduct.name) {
    // console.log('if');
    const error = new Error('"name" is required');
    error.name = 'name not found';
    error.status = 400;
    throw error;
  }
  if (newProduct.name.length < 5) {
    const error = new Error('"name" length must be at least 5 characters long');
    error.name = 'name is small';
    error.status = 422;
    throw error;
  }
  return true;
};

module.exports = {
  validationName,
};