const express = require('express');
const router = express.Router();

const { Product } = require('../models/productModel');
const productService = require('../services/productService');

// localhost:3000/products/
router.get('/', (req, res) => {
    productService.findAllProducts((err, data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    });
});

router.get('/:productId', (req, res) => {
    const id = req.params.productId;
    console.log(id);

    productService.findProductById(id,(err, data) => {
        if(data){
            res.status(200).json(data);
        } else {
            res.status(404).json({message: 'Product with id '+ id + ' not found.'});
        }
        console.log(data);
        if (err) {
            res.status(500).json({
                error: err
            });
        }
    });
});

router.post('/', (req, res) => {

    var product = new Product({
        productName: req.body.productName,
        price: req.body.price,
        category: req.body.category
    });
    console.log(product)

    productService.saveNewProduct(product, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/:productId', (req, res) => {
    const id = req.params.productId;
    console.log(id);

    productService.deleteProductById(id, (err, data) => {
        if(data){
            res.status(200).json(data);
        }
        console.log(data);
        if (err) {
            res.status(500).json({
                error: err
            });
        }
    })
});

router.patch('/:productId', (req, res) => {
    const id = req.params.productId;
    console.log(id);
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propertyName] = ops.value;
    }
    productService.updateProductById(id, updateOps, (err, result) => {
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'Product with id '+ id + ' not found.'});
        }
        console.log(result);
        if (err) {
            res.status(500).json({
                error: err
            });
        }
    });
});

module.exports = router;

