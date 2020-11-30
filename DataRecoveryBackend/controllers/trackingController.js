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

router.post('/', function(req, res) {
    db.faqs.create(req.body).then(faq => res.json(faq));
});


module.exports = router;

