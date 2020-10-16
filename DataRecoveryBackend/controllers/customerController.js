const express = require('express');
const router = express.Router();

const { Customer } = require('../models/customerModel');
const customerService = require('../services/customerService');

// localhost:3000/customers/
router.get('/', (req, res) => {
    customerService.findAllCustomers((err, data) => {
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

router.get('/:customerId', (req, res) => {
    const id = req.params.customerId;
    console.log(id);

    customerService.findCustomerById(id,(err, data) => {
    if(data){
        res.status(200).json(data);
    } else {
        res.status(404).json({message: 'Customer with id '+ id + ' not found.'});
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
    var customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        city: req.body.city,
        street: req.body.street,
        houseNumber: req.body.houseNumber
    });

    customerService.saveNewCustomer(customer, (err, result) => {
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

router.delete('/:customerId', (req, res) => {
    const id = req.params.customerId;
    console.log(id);

    customerService.deleteCustomerById(id, (err, data) => {
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

router.patch('/:customerId', (req, res) => {
    const id = req.params.customerId;
    console.log(id);
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propertyName] = ops.value;
    }
    customerService.updateCustomerById(id, updateOps, (err, result) => {
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'Customer with id '+ id + ' not found.'});
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

