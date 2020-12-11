const express = require('express');
const router = express.Router();
const db = require('../db');
const newsService = require('../services/newsService')

// localhost:3000/newss/
router.get('/', function(req, res) {
    newsService.findAllNews((err, data) => {
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

router.get('/:newsId', function(req, res) {
    const id = req.params.newsId;
    console.log(id);
    newsService.findNewsById(id,(err,data) => {
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
    newsService.saveNewNews(req.body, (err, data) => {
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

router.patch('/:newsId', function(req, res) {
    const id = req.params.newsId;
    newsService.updateNewsById(id,req.body, (err,data) => {
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

router.delete('/:newsId', function (req, res){
    console.log('newsId');
    newsService.deleteNewsById(req.params.newsId,(err,data) => {
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
