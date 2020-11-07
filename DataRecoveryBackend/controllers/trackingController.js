const express = require('express');
const router = express.Router();

const orderService = require('../services/trackingService');

router.post('/:trackingId', (req, res) => {
    orderService.validateCustomer(req.body.postalCode,req.params.trackingId, (err, result) => {
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

