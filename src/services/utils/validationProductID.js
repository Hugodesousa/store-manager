const validationProductID = (list, id) => { 
  const findID = list.some((el) => el.id === +id);
  if (!findID) {
    const error = new Error('Product not found');
    error.name = 'Not found error';
    error.status = 404;
    throw error; 
  }
  return true;
};
module.exports = {
  validationProductID,
};