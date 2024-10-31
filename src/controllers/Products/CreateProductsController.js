
const fs = require("fs");
const path = require("path");
const ProductModel = require('../../models/ProductModel');
const {saveByUrl} = require('../../services/product-images');

module.exports = async (request, response) => {
    let {
        name,
        price,
        slug
    } = request.body;
    let product = await ProductModel.create({
        name, price, slug
    });

    let {images} = request.body;

    saveByUrl({
        url: images,
        filename: Math.random().toString(16).slice(2),
        slug
    });

    response.status(201);
    return response.json(product);

}