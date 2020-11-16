
TransModel = require('../models/transportation.model');
//For index
exports.index = (req, res) => {
    TransModel.get(function (err, msg) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Transportation Successfully!",
            data: msg       
        });
    });
};

exports.add = function (req, res) {
    var trans = new TransModel();
    trans.name = req.body.name;
    trans.capacity = req.body.capacity;
//Save and check error
trans.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Transportation Added!",
            data: trans
        });
    });
};