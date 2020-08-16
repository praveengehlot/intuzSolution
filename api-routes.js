// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import prodcut controller
var productController = require('./controller/productController');
// Product routes
router.route('/products')
    .get(productController.index);
// Export API routes
module.exports = router;