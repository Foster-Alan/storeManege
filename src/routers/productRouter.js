const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProduct);
router.post('/', productsController.postProduct);
router.put('/:id', productsController.putProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;