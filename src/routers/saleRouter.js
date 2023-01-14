const express = require('express');
const saleController = require('../controllers/saleControler');

const router = express.Router();

router.post('/', saleController.postMultipleSales);
router.get('/', saleController.getAllSales);
router.get('/:id', saleController.getOneSale);

module.exports = router;