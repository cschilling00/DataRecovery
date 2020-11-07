const express = require('express');
const router = express.Router();

const { Order } = require('../models/orderModel');
const orderService = require('../services/orderService');

// localhost:3000/orders/
router.get('/', (req, res) => {
    orderService.findAllOrders((err, data) => {
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

router.get('/:orderId', (req, res) => {
    const id = req.params.orderId;
    console.log(id);

    orderService.findOrderById(id,(err, data) => {
        if(data){
            res.status(200).json(data);
        } else {
            res.status(404).json({message: 'Order with id '+ id + ' not found.'});
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
    var order = new Order({
        customer: req.body.customer,
        product: req.body.product,
    });

    orderService.saveNewOrder(order, (err, result) => {
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

router.delete('/:orderId', (req, res) => {
    const id = req.params.orderId;
    console.log(id);

    orderService.deleteOrderById(id, (err, data) => {
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

router.patch('/:orderId', (req, res) => {
    const id = req.params.orderId;
    console.log(id);
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propertyName] = ops.value;
    }
    orderService.updateOrderById(id, updateOps, (err, result) => {
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'Order with id '+ id + ' not found.'});
        }
        console.log(result);
        if (err) {
            res.status(500).json({
                error: err
            });
        }
    });
});
router.post('/tracking', (req, res) => {
    console.log('REQUEST: '+ req.body)
    var compOrder = new Order({
        postalCode: req.body.customer.postalCode,
        trackingId: req.body.trackingId
    });
    console.log(compOrder);
    orderService.validateCustomer(compOrder, (err, result) => {
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
module.exports = router;

