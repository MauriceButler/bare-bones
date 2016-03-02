var persistence = require('^persistence');

function update(taskId, taskData, callback){
    persistence.task.update(taskId, taskData, callback);
}

module.exports = update;