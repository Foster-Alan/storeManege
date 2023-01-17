const express = require('express');
const productsController = require('../controllers/productsController');
const validateProductName = require('../services/validations/validateProductName');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/search', productsController.getAllSearchProduct);
router.get('/:id', productsController.getOneProduct);
router.post('/', validateProductName, productsController.postProduct);
router.put('/:id', validateProductName, productsController.putProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;