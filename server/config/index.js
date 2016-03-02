var environmentName = process.env.NODE_ENV || 'local';

module.exports = require('./' + environmentName);