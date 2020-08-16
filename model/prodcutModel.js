// ProdcutModel.js
var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    addedBy: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'users'
	},
	updatedBy: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'users'
	},
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
// Export Prodcut model
var Product = module.exports = mongoose.model('products', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}