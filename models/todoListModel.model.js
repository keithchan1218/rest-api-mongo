const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    members: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true
    },
    createUser: {
        type: String,
        required: true
    },
    lastUpdateDate: {
        type: Date,
        required: true
    },
    lastUpdateUser: {
        type: String,
        required: true
    },
});

const TodoModel = module.exports = mongoose.model('todoList', TodoSchema);

module.exports.get = function (callback, limit) {
    TodoModel.find(callback).limit(limit); 
}