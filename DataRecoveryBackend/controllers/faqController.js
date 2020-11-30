const express = require('express');
const router = express.Router();
const db = require('../db');


// localhost:3000/faq/
router.get('/', function(req, res) {
    db.faqs.findAll().then(faqs => res.json(faqs));
});

router.get('/:faqId', function(req, res) {
    const id = req.params.faqId;
    console.log(id);
    db.faqs.findByPk(id).then(faqs => res.json(faqs));
    // db.customers.findOne({'customerId':id}).then(customer => res.json(customer));
});

router.post('/', function(req, res) {
    db.faqs.create(req.body).then(faq => res.json(faq));
});

router.patch('/:faqId', function(req, res) {
    const id = req.params.faqId;
    db.faqs.findByPk(id)
        .then(faq => faq.update(req.body)
            .then(faq => res.json(faq)));
});

router.delete('/:faqId', function (req, res){
    console.log(req.params.faqId);
    db.faqs.findByPk(req.params.faqId)
        .then(faq => faq.destroy())
        .then(faq => res.sendStatus(200))
});

module.exports = router;

