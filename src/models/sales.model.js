const camelize = require('camelize');
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

const findAllSales = async () => { 
  const [result] = await connection.execute(`SELECT
  t1.sale_id,
  t2.date,
  t1.product_id,
  t1.quantity
  FROM StoreManager.sales_products AS t1
  INNER JOIN StoreManager.sales AS t2 ON t2.id = t1.sale_id`);
  return camelize(result);
};

const findSalesByID = async (id) => { 
  const [sale] = await connection.execute(`SELECT
    t2.date,
    t1.product_id,
    t1.quantity
FROM StoreManager.sales_products AS t1
    INNER JOIN StoreManager.sales AS t2 ON t2.id = t1.sale_id
    WHERE t1.sale_id = ?`, [id]);
  return camelize(sale);
};

const deleteSale = async (id) => {
  const verifySale = await findSalesByID(id);
  if (verifySale.length > 0) {
    await connection.execute(`DELETE FROM StoreManager.sales 
    WHERE id = ?;`, [id]);
    return 'deleteOk';
  }
  return 'not foud';
};

module.exports = {
  insertSale,
  findAllSales,
  findSalesByID,
  deleteSale,
};