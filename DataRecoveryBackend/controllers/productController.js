const express = require('express');
const router = express.Router();
const db = require('../db');
const productService = require('../services/productService')

// localhost:3000/products/
router.get('/', function(req, res) {
    productService.findAllProducts((err, data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    })
});

router.get('/:productId', function(req, res) {
    const id = req.params.productId;
    console.log(id);
    productService.findProductById(id,(err,data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    })
});

router.post('/', function(req, res) {
    productService.saveNewProduct(req.body, (err, data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    })
});

router.patch('/:productId', function(req, res) {
    const id = req.params.productId;
    productService.updateProductById(id,req.body, (err,data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    })
});

router.delete('/:productId', function (req, res){
    console.log('productId');
    productService.deleteProductById(req.params.productId,(err,data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    })
});

module.exports = router;
