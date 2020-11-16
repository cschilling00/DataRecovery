const express = require('express');
const router = express.Router();
const pdf = require("pdf-creator-node");
const fs = require('fs');

const { Order } = require('../models/orderModel');
const orderService = require('../services/orderService');

// localhost:3000/invoice/
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
router.post('/generate/:orderId', (req, res) => {
    const id = req.params.orderId;
    orderService.findOrderById(id,(err, data) => {
        if(data){
            let html = fs.readFileSync('./DataRecoveryBackend/assets/orderTemplate.html','utf8');
            var options = {
                format: "A4",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "45mm",
                    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
                },
                "footer": {
                    "height": "28mm",
                    "contents": {
                        first: 'Cover page',
                        2: 'Second page', // Any page number is working. 1-based index
                        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                        last: 'Last Page'
                    }
                }
            };
            let document ={
                html: html,
                data: {
                    order: order
                },
                path: './invoice.pdf'
            }
            pdf.create(document, options)
                .then(pdf => {
                    console.log(pdf)
                    res.status(200)
                }).send
                .catch(error => {
                    console.error(error)
                });
            res.file(pdf.filename)
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
module.exports = router;

