// const camelize = require('came
const connection = require('./db/connection');

const insertSale = async (salesList) => {
  const itemsSold = [];
  const [{ insertId }] = await
    connection.execute('INSERT INTO `StoreManager`.`sales` (`date`)VALUES(CURRENT_DATE())');

  salesList.forEach(async ({ productId, quantity }) => {
    connection.execute(`INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity)VALUES(?, ?, ?)`,
    [insertId, productId, quantity]);
    itemsSold.push({ productId, quantity });
  });
  const result = { id: insertId, itemsSold };
  return result;
};

module.exports = {
insertSale,
};