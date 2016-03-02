var mySql = require('^persistence/mySql');

function update(taskId, data, callback){
    mySql.models.Task.cps.update(
        data,
        {
            where: {
                id: taskId
            }
        },
        (error) => callback(error, null)
    );
}

module.exports = update;