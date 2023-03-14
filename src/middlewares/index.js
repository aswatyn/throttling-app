const throttling = require('./throttle');

module.exports = {
    throttleMiddleware: throttling.isThrottling,
};
