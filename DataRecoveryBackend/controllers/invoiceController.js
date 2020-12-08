const express = require('express');
const router = express.Router();
const fs = require('fs');
const orderService = require('../services/orderService');
const invoiceService = require('../services/invoiceService')
// localhost:3000/invoice/

router.get('/generate/:orderId', (req, res) => {
    const id = req.params.orderId;

    invoiceService.generateInvoice(id,(err,data) => {
        if(data){
            console.log(data.filename);
            res.download(data.filename,'Rechnung.pdf');
        }
        if(err){
            console.log('Error Occured')
            res.status(500).json({
                error: err
            });
            res.end();
        }
    })
});
module.exports = router;

