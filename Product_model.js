const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
	Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true,
        integer: true
    },
    Price: {
        type: Number,
        required: true,
        double:true

    }
});
var Product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}
