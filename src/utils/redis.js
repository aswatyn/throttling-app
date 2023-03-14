const Redis = require('ioredis');
const {
    CONSTANTS: { REDIS },
} = require('../config/index');

const client = new Redis({
    port: REDIS.REDIS_PORT,
    host: REDIS.REDIS_HOST,
});

exports.setRedisTokenAsKeyValue = async (key, value, expiry) => {
    const setToken = await client.set(`${key}`, value, 'ex', expiry);
    return setToken;
};

exports.updateRedisTokenAsKeyValue = async (key, value) => {
    const setToken = await client.set(`${key}`, value, 'KEEPTTL');
    return setToken;
};

exports.getTokenByKey = async (key) => {
    const redisData = await client.get(key);

    return redisData;
};
