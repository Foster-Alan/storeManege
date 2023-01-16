const express = require('express');
const saleController = require('../controllers/saleControler');

const router = express.Router();

router.post('/', saleController.postMultipleSales);
router.get('/', saleController.getAllSales);
router.get('/:id', saleController.getOneSale);
router.delete('/:id', saleController.deleteOneSale);

module.exports = router;