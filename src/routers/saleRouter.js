const express = require('express');
const saleController = require('../controllers/saleControler');

const router = express.Router();

router.post('/', saleController.postMultipleSales);
router.get('/', saleController.getAllSales);
router.delete('/:id', saleController.deleteOneSale);
router.put('/:id', saleController.putOneSale);
router.get('/:id', saleController.getOneSale);

module.exports = router;