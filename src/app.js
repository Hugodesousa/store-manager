const express = require('express');
const cors = require('cors');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const routerProducts = require('./router/products.router');
const routerSales = require('./router/sales.router');
const swaggerFile = require('../swagger_output.json');

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_request, response) => {
  response.send();
});

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
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