const express = require('express');
require('express-async-errors');
// const connection = require('./models/db/connection');
const routerProducts = require('./router/products.router');
const routerSales = require('./router/sales.router');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routerProducts);

app.use('/sales', routerSales);
// const port = 9229;

// app.listen(port, async () => {
//   console.log(`API está sendo executada na porta ${port}`);

//   // O código abaixo é para testarmos a comunicação com o MySQL
//   const [result] = await connection.execute('SELECT 1');
//   if (result) {
//     console.log('MySQL connection OK');
//   }
// });

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
app.use((error, _req, res, _next) => { 
  if (error.name) {
    res.status(error.status).send({ message: error.message });
  } 
  res.status(500).send({ message: 'eita' });
});
// app.use((_error, _req, _res, _next) => { 
//   res.status(500).send({ message: 'eita' });
// });
  module.exports = app;