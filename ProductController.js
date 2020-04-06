
Product = require('./Product_model');

exports.index = function (req, res) {
    Product.get(function (err, product) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: product
        });
    });
};

exports.new = function (req, res) {
    var product = new Product();
    product.Id = req.body.Id;
    product.Name = req.body.Name;
    product.Quantity=req.body.Quantity;
    product.Price=req.body.Price;

    product.save(function (err) {

res.json({
            message: 'New product created',
            data: product
        });
    });
};
// Handling view product info
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: JSON.stringify(product)
        });
    });
};
// Handling update product info
exports.update = function (req, res) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body},{new: true},function (err, product) {
        if (err) return next(err);
        res.json({
            message: 'Product updated',
            data: product
        });
        res.redirect("/api/products/"+product._id);
    });
};
// Handling delete product
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};