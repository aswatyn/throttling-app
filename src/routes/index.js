const express = require('express');
const { testRateLimiterRoute } = require('../modules/rateLimiter');

const router = express.Router();

router.use('/test-rate-limiter', testRateLimiterRoute);

module.exports = router;
