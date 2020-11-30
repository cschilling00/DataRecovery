const express = require('express');
const router = express.Router();
const db = require('../db');
const orderService = require('../services/orderService')

// localhost:3000/orders/
router.get('/', function(req, res) {
    orderService.findAllOrders((err, data) => {
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

router.get('/:orderId', function(req, res) {
    const id = req.params.orderId;
    orderService.findOrderById(id,(err,data) => {
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
    orderService.saveNewOrder(req.body, (err, data) => {
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

router.patch('/:orderId', function(req, res) {
    const id = req.params.orderId;

    orderService.updateOrderById(id,req.body, (err,data) => {
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

router.delete('/:orderId', function (req, res){
    orderService.deleteOrderById(req.params.customerId,(err,data) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            res.end();
        } else {
            res.status(200).json(data);
        }
    })
    console.log(req.params.orderId);
    db.orders.findByPk(req.params.orderId)
        .then(order => order.destroy())
        .then(order => res.sendStatus(200))
});

module.exports = router;


// router.post('/tracking', (req, res) => {
//     console.log('REQUEST: '+ req.body)
//     var compOrder = new Order({
//         postalCode: req.body.customer.postalCode,
//         trackingId: req.body.trackingId
//     });
//     console.log(compOrder);
//     orderService.validateCustomer(compOrder, (err, result) => {
//         if (err) {
//             res.status(500).json({
//                 error: err
//             });
//             res.end();
//         } else {
//             res.status(200).json(result);
//         }
//     });
// });


