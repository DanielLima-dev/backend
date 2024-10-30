const express = require('express');

let router = express.Router();

const AllProductsController = require('../controllers/Products/AllProductsController');

const CreateProductsController = require('../controllers/Products/CreateProductsController')

router.get('/products', AllProductsController);
router.post('/products', CreateProductsController)

module.exports = router;