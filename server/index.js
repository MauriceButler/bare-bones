require('rooty')('./server');

var http = require('http'),
    mySql = require('./persistence/mySql'),
    config = require('./config'),
    logger = require('./logger'),
    router = require('./router'),
    kgo = require('kgo'),
    server = http.createServer();

function initialiseRoutes(callback) {
    server.on('request', router.createHandler());

    server.listen(config.port, function (error) {
        callback(error);
    });
}

kgo
('initMySql', mySql.initialise)
('router', ['!initMySql'], initialiseRoutes)
(['*', '!router'], function(error){
    if (error) {
        throw error;
    }

    logger.info('Listening on port: ' + config.port);
});