const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProduct);
// router.get('/path/:id', path1Controller.getOneFunction)
// router.post('/path', path1Controller.postFunction)
// router.put('/path/:id', path1Controller.putFunction)
// router.delete('/path/:id', path1Controller.deleteFunction)

module.exports = router;