var mySql = require('^persistence/mySql'),
    genericCallback = require('generic-callback');

function get(taskId, callback){
    mySql.models.Task.cps.find(
        {
            where: {
                id: taskId
            }
        },
        genericCallback(callback)
    );
}

module.exports = get;