const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.get('/', salesController.allSales);

router.get('/:id', salesController.saleByID);

router.post('/', salesController.postSales);

module.exports = router;