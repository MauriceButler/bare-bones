var persistence = require('^persistence');

function get(taskId, callback){
    persistence.task.get(taskId, callback);
}

module.exports = get;