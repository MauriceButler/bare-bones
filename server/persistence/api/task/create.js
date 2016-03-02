var mySql = require('^persistence/mySql'),
    genericCallback = require('generic-callback');

function create(taskData, callback){
    mySql.models.Task.cps.create(taskData, genericCallback(callback));
}

module.exports = create;