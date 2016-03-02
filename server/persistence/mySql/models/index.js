var sequelizeCps = require('sequelize-cps');

module.exports = function (sequelize) {
    var models = {
            Task: require('./task')(sequelize)
        };

    sequelizeCps(models);

    return models;
};
