const express = require('express');
const router = express.Router();

const loginService = require('../services/loginService');

router.post('/:trackingId', (req, res) => {
    console.log(req.body.postalCode,req.params.trackingId)
    loginService.validateCustomer(req.body.postalCode,req.params.trackingId, (err, result) => {
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

router.post('/', (req, res) => {
    console.log(req.body.username, req.body.password)
    loginService.validateAdmin(req.body.username, req.body.password, (err, result) => {
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

