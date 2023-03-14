const express = require('express');
const router = express.Router();
const { test } = require('./rateLimiter.controller');
const { throttleMiddleware } = require('../../middlewares');

router.get('/', [throttleMiddleware], test);

module.exports = router;
