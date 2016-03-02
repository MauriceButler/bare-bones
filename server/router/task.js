var logger = require('^logger'),
    retorter = require('retort-json')(logger),
    requestData = require('request-data'),
    wraperr = require('wraperr'),
    taskService = require('^services/task');

function createTask(retort, tokens, taskData){
    taskService.create(
        taskData,
        wraperr(
            retort.ok,
            retort.error
        )
    );
}

function getTask(retort, tokens){
    taskService.get(
        tokens.taskId,
        wraperr(
            retort.okOrNotFound,
            retort.error
        )
    );
}

function updateTask(retort, tokens, taskData){
    taskService.update(
        tokens.taskId,
        taskData,
        wraperr(
            retort.ok,
            retort.error
        )
    );
}

function deleteTask(retort, tokens){
    taskService.remove(
        tokens.taskId,
        wraperr(
            retort.ok,
            retort.error
        )
    );
}

module.exports = {
    '/tasks': {
        POST: requestData(retorter(createTask))
    },
    '/tasks/`taskId`': {
        GET: retorter(getTask),
        PUT: requestData(retorter(updateTask)),
        DELETE: retorter(deleteTask)
    }
};