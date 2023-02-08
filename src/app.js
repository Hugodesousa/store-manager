const express = require('express');
require('express-async-errors');
const routerProducts = require('./router/products.router');
const routerSales = require('./router/sales.router');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routerProducts);

app.use('/sales', routerSales);

app.use((error, _req, res, _next) => { 
  if (error.name && error.status) {
    console.error(error);
   return res.status(error.status).send({ message: error.message });
  } 
 return res.status(500).send({ message: 'generic error' });
});

module.exports = app;