const express = require('express');
const router = express.Router();
const getData = require('../controllers/data.js');
router.post('/', getData);

module.exports = router;
