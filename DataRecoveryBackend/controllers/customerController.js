const express = require('express');
const router = express.Router();
const db = require('../db');
const customerService = require('../services/customerService')

// localhost:3000/customers/
router.get('/', function(req, res) {
    customerService.findAllCustomers((err, data) => {
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

router.get('/:customerId', function(req, res) {
    const id = req.params.customerId;
    console.log(id);
    customerService.findCustomerById(id,(err,data) => {
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
    customerService.saveNewCustomer(req.body, (err, data) => {
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

router.patch('/:customerId', function(req, res) {
    const id = req.params.customerId;
    customerService.updateCustomerById(id,req.body, (err,data) => {
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

router.delete('/:customerId', function (req, res){
    customerService.deleteCustomerById(req.params.customerId,(err,data) => {
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
