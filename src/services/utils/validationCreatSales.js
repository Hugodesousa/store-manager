const validCreatSale = (list) => {
list.forEach((element) => {
  if (!element.productId) { 
    const error = new Error('"productId" is required');
    error.name = 'product ID not found';
    error.status = 400;
    throw error;
  }
  if (!element.quantity) {
    const error = new Error('"quantity" is required');
    error.name = 'quantity not found';
    error.status = 400;
    throw error;
  }
});
return true;
};

module.exports = {
  validCreatSale,
};