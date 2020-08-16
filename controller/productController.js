// Import prodcut model
Product = require('../model/prodcutModel');
// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, prodcuts) {
        console.log(err);
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: prodcuts
        });
    });
};
