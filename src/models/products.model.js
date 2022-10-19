const camelize = require('camelize');
const connection = require('./db/connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const findProductsByID = async (id) => {
  // console.log(id);
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
    );
    // console.log(product);
  
    return camelize(product);
  };
  
const insertProducts = async (newProduct) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO `StoreManager`.products (`name`) VALUES (?)', [newProduct.name],
  );
  const product = {
    id: insertId,
    name: newProduct.name,
  };
  return product;
};

module.exports = {
  findAllProducts,
  findProductsByID,
  insertProducts,
};
