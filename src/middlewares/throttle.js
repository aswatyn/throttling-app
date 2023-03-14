const { redis } = require('../utils');
const {
    CONSTANTS: { RATE_LIMITER },
} = require('../config');

module.exports.isThrottling = async (req, res, next) => {
    try {
        const referer =
            req.headers.referrer ||
            req.headers.referer ||
            req.headers['x-forwarded-for']?.split(',').shift() ||
            req.socket?.remoteAddress ||
            'unknown';
        if (!referer) throw new Error('Cannot get referer');

        // Get request frequency from redis
        const frequency = await redis.getTokenByKey(referer);
        if (frequency && Number(frequency) >= RATE_LIMITER.REQUEST_LIMIT) {
            return res.status(429).json({
                message: 'Too many requests',
                success: false,
                error: 'Too many requests',
            });
        }

        if (!frequency) await redis.setRedisTokenAsKeyValue(referer, 1, RATE_LIMITER.TIME_INTERVAL_IN_SEC);
        else await redis.updateRedisTokenAsKeyValue(referer, Number(frequency) + 1);

        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error Occured',
            success: false,
            error: error.message,
        });
    }
};
