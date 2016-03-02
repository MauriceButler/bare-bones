var mySql = require('^persistence/mySql');

function remove(taskId, callback){
    mySql.models.Task.cps.destroy(
        {
            where: {
                id: taskId
            }
        },
        (error) => callback(error, null)
    );
}

module.exports = remove;