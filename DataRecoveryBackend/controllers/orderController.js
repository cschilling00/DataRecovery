const express = require('express');
const router = express.Router();
const db = require('../db');

// localhost:3000/orders/
router.get('/', function(req, res) {
    db.orders.findAll().then(orders => res.json(orders));
});

router.get('/:orderId', function(req, res) {
    const id = req.params.orderId;
    console.log(id);
    db.orders.findByPk(id).then(orders => res.json(orders));
    // db.customers.findOne({'customerId':id}).then(customer => res.json(customer));
});

router.post('/', function(req, res) {
    db.orders.create(req.body).then(order => res.json(order));
});

router.patch('/:orderId', function(req, res) {
    const id = req.params.orderId;
    db.orders.findByPk(id)
        .then(order => order.update(req.body)
            .then(order => res.json(order)));
});

router.delete('/:orderId', function (req, res){
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


