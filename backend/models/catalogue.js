const mongoose = require('mongoose');

const catalogueSchema = new mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    price: {type: Number, require: true},
    image: {type: String, require: true},
    description: {type: String, require: true},
    dimensionW: {type: Number, require: true},
    dimensionD: {type: Number, require: true},
    dimensionH: {type: Number, require: true},
    material: {type: String, require: true},
    countInStock: {type: Number, require: true},
})

const Catalogue = mongoose.model('catalogue', catalogueSchema);

module.exports = Catalogue;