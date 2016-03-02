var persistence = require('^persistence');

function remove(taskId, callback){
    persistence.task.remove(taskId, callback);
}

module.exports = remove;