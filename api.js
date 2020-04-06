const express=require('express')
router = express.Router();
router.get('/', function (req, res) {
    res.json({
        status: 'Current requested API on port is working',
        message: 'Welcome to the Inventory database'
    });
});
var ProductController = require('./ProductController');
// Product routes
router.route('/products')
    .get(ProductController.index)
    .post(ProductController.new);
router.route('/products/:product_id')
    .get(ProductController.view)
    .put(ProductController.update)
    .delete(ProductController.delete);
module.exports = router;