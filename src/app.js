const express = require('express');
// const connection = require('./models/db/connection');
const routerProducts = require('./router/products.router');
require('express-async-errors');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routerProducts);

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
app.use((error, req, res, next) => { 
  console.error(error.stack);
  next();

  app.use((error, req, res, next) => { 
    res.status(500).send({ message: 'eita' });
  });
});
  module.exports = app;