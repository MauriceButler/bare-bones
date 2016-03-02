var bunyan = require('bunyan'),
    config = require('^config'),
    streams = [];

streams.push({
    level: config.logLevel,
    stream: process.stdout,
});

module.exports =  bunyan.createLogger({
    name: config.serverName,
    streams: streams
});
