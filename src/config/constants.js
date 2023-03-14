module.exports = {
    APP: {
        port: process.env.PORT || 3000,
    },
    REDIS: {
        REDIS_PORT: process.env.REDIS_PORT || 'localhost',
        REDIS_HOST: process.env.REDIS_HOST || 6379,
    },
    RATE_LIMITER: {
        TIME_INTERVAL_IN_SEC: process.env.TIME_INTERVAL_IN_SEC || 60,
        REQUEST_LIMIT: process.env.REQUEST_LIMIT || 3,
    },
};
