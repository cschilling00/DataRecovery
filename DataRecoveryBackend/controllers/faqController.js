const express = require('express');
const router = express.Router();

const { Faq } = require('../models/faqModel');
const faqService = require('../services/faqService');

// localhost:3000/faq/
router.get('/', (req, res) => {
    faqService.findAllFaqs((err, data) => {
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

router.get('/:faqId', (req, res) => {
    const id = req.params.faqId;
    console.log(id);

    faqService.findFaqById(id,(err, data) => {
        if(data){
            res.status(200).json(data);
        } else {
            res.status(404).json({message: 'Product with id '+ id + ' not found.'});
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

    var faq = new Faq({
        question: req.body.question,
        answer: req.body.answer
    });

    console.log(faq)

    faqService.saveNewFaq(faq, (err, result) => {
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

router.delete('/:faqId', (req, res) => {
    const id = req.params.faqId;
    console.log(id);

    faqService.deleteFaqById(id, (err, data) => {
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

router.patch('/:faqId', (req, res) => {
    const id = req.params.faqId;
    console.log(id);
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propertyName] = ops.value;
    }
    faqService.updateFaqById(id, updateOps, (err, result) => {
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'Product with id '+ id + ' not found.'});
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

