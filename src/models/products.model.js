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

const deleteProductByID = async (id) => connection.execute(
  'DELETE FROM `StoreManager`.products WHERE id = ?', [id],
);

module.exports = {
  findAllProducts,
  findProductsByID,
  insertProducts,
  deleteProductByID,
};
