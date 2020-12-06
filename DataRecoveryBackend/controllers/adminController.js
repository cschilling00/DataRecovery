const express = require('express');
const router = express.Router();
const db = require('../db');
const adminService = require('../services/adminService')

// localhost:3000/customers/
router.get('/', function(req, res) {
    adminService.findAllAdmins((err, data) => {
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

router.get('/:adminId', function(req, res) {
    const id = req.params.adminId;
    console.log(id);
    adminService.findAdminById(id,(err,data) => {
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
    adminService.saveNewAdmin(req.body, (err, data) => {
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

router.patch('/:adminId', function(req, res) {
    const id = req.params.adminId;
    adminService.updateAdminById(id,req.body, (err,data) => {
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

router.delete('/:adminId', function (req, res){
    adminService.deleteAdminById(req.params.adminId,(err,data) => {
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
