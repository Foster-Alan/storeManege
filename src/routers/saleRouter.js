const express = require('express');
const saleController = require('../controllers/saleControler');

const router = express.Router();

router.post('/', saleController.postMultipleSales);

module.exports = router;