var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'task',
        {
            description: {
                type: Sequelize.STRING
            }
        }
    );
};