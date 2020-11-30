const express = require('express');
const router = express.Router();
const db = require('../db');
const faqService = require('../services/faqService')

// localhost:3000/faqs/
router.get('/', function(req, res) {
    faqService.findAllFaqs((err, data) => {
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

router.get('/:faqId', function(req, res) {
    const id = req.params.faqId;
    console.log(id);
    faqService.findFaqById(id,(err,data) => {
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
    faqService.saveNewFaq(req.body, (err, data) => {
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

router.patch('/:faqId', function(req, res) {
    const id = req.params.faqId;
    faqService.updateFaqById(id,req.body, (err,data) => {
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

router.delete('/:faqId', function (req, res){
    console.log('faqId');
    faqService.deleteFaqById(req.params.faqId,(err,data) => {
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
