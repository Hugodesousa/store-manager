const camelize = require('camelize');
const connection = require('./db/connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const findProductsByID = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
    );
    return camelize(product);
  };
  
module.exports = {
  findAllProducts,
  findProductsByID,
};
