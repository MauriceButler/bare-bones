var persistence = require('^persistence');

function create(taskData, callback){
    persistence.task.create(taskData, callback);
}

module.exports = create;