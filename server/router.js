const express = require('express');
const getReq = require('./controllers');
const router = express.Router();

router.get('/', getReq);

module.exports = router;
