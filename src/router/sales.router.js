const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.post('/', salesController.postSales);

module.exports = router;