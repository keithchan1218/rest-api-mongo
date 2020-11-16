const mongoose = require('mongoose');

const TransportSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

const TransportModel = module.exports = mongoose.model('trans', TransportSchema);

module.exports.get = function (callback, limit) {
    TransportModel.find(callback).limit(limit); 
}