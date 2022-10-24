const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers');

router.get('/:id', productsController.productbyID);

router.get('/', productsController.allProducts);

router.post('/', productsController.postProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;