const express = require('express');
const router = express.Router();
const db = require('../db');

// localhost:3000/customers/
router.get('/', function(req, res) {
    db.customers.findAll().then(customers => res.json(customers));
});

router.get('/:customerId', function(req, res) {
    const id = req.params.customerId;
    console.log(id);
    db.customers.findByPk(id).then(customers => res.json(customers));
    // db.customers.findOne({'customerId':id}).then(customer => res.json(customer));
});

router.post('/', function(req, res) {
    db.customers.create(req.body).then(customer => res.json(customer));
});

router.patch('/:customerId', function(req, res) {
    const id = req.params.customerId;
    db.customers.findByPk(id)
        .then(customer => customer.update(req.body)
            .then(customer => res.json(customer)));
});

router.delete('/:customerId', function (req, res){
    console.log('customerId');
    db.customers.findByPk(req.params.customerId)
        .then(customer => customer.destroy())
        .then(customer => res.sendStatus(200))
})

module.exports = router;
