
TodoModel = require('../models/todoListModel.model');

// GET ALL
exports.getAll = (req, res) => {
    TodoModel.get(function (err, msg) {
        if (err)
            res.status(404).send({
                'status': 'Error',
                'returnData': err
            });
        res.send({
            'status': 'Success',
            'returnData': msg
        });
    });
};

// GET DATE
exports.findDate = (req, res) => {
    // between the createDate
    TodoModel.find({createDate:{$gt:new Date( req.query.createDate ), $lt:new Date((new Date( req.query.createDate )).valueOf() + 86400000)}}).sort({createDate: -1}).exec(function(err, docs){
        if (err) {
            console.log(err);
            res.status(404).send({
                'status': 'Error',
                'returnData': err
            });
        }
        else {
            console.log("Result : ", docs);
            if (docs) {
                res.send({
                    'status': 'Success',
                    'returnData': docs
                });
            } else {
                res.status(404).send({
                    'status': 'Failed',
                    'returnData': 'No records'
                });
            }

        }
    });
};

// GET ONE
exports.findOne = (req, res) => {
    TodoModel.findOne({ '_id': req.query.id }, function (err, docs) {
        if (err) {
            console.log(err);
            res.status(404).send({
                'status': 'Error',
                'returnData': 'Please input valid username'
            });
        }
        else {

            console.log("Result : ", docs);
            if (docs) {
                res.send({
                    'status': 'Success',
                    'returnData': docs
                });
            } else {
                res.status(404).send({
                    'status': 'Failed',
                    'returnData': 'No todo'
                });
            }

        }
    });
};

// POST
exports.addOne = function (req, res) {

    var todos = new TodoModel();
    todos.name = req.body.name;
    todos.type = req.body.type;
    todos.deadline = req.body.deadline;
    todos.members = req.body.members;
    todos.remarks = req.body.remarks;
    todos.createDate = new Date();
    todos.createUser = req.body.createUser;
    todos.lastUpdateDate = new Date();
    todos.lastUpdateUser = req.body.lastUpdateUser;

    todos.save(function (err) {
        if (err) {
            console.log(err);
            res.status(404).send({
                'status': 'Error',
                'returnData': err
            });
        }
        else {
            res.send({
                'status': 'Success',
                'message': "Added new Todo item!",
                'id': todos._id,
                'data': todos
            });
        }
    });
};

// DELETE ONE
exports.findOneAndDelete = (req, res) => {
    TodoModel.findOneAndDelete({ _id: req.body.id }, function (err, docs) {
        if (err) {
            console.log(err);
            res.status(404).send({
                'status': 'Error',
                'returnData': 'Please input valid id'
            });
        }
        else {
            console.log("Result : ", docs);
            res.send({
                'status': 'Success',
                'message': 'Deleted ' + req.body.id,
                'returnData': docs
            });
        }
    });
};