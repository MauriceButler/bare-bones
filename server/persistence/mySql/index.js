var Sequelize = require('sequelize'),
    logger = require('^logger').child({ module: 'db' }),
    config = require('^config').db,
    db = {};

function createConnection(){
    return new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            host: config.host,
            dialect: config.dialect,
            port: config.port,
            pool: {
                maxConnections: 15,
                maxIdleTime: 3000
            },
            logging: function (messsage) {
                logger.debug(messsage);
            },
            dialectOptions: {
                multipleStatements: true
            }
        }
    );
}

function initialise(callback) {
    if(db.sequelize){
        throw new Error('Database already initialised');
    }

    var sequelize = createConnection();

    db.models = require('./models')(sequelize);

    sequelize
        .sync()
        .then(
            function(){
                db.sequelize = sequelize;
                logger.info('Connection to database established successfully');
                callback();
            },
            callback
        );
}

db.createConnection = createConnection;
db.initialise = initialise;

module.exports = db;
