const db = require('../db');
const pdf = require("pdf-creator-node");
const fs = require('fs');
const orderService = require('../services/orderService');
const res = require("express");

exports.generateInvoice = (id, callback) => {

    orderService.findOrderById(id,(err, data) => {
        if (data) {
            console.log(data.toJSON())
            let html = fs.readFileSync('./assets/orderTemplate.html','utf8');

            var options = {
                format: "A4",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "45mm",
                    contents: '<div style="text-align: center;">Author:  Tobias Jungbauer</div>'
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
                    order: data.toJSON()
                },
                path: './invoice.pdf'
            }
            pdf.create(document, options)
                .then(pdf => {
                    callback(null,pdf)
                })
                .catch(error => {
                    console.error(error);
                    callback(error,null);
                });
        }
        if (err) {
            console.log(err);
            callback(err, null);
        }
    });
}

