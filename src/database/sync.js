const ProductModel = require("../models/ProductModel");
const ProductImageModel = require("../models/ProductImageModel");
const ProductCategoryModel = require("../models/ProductCategoryModel");

async function execute(){
    await ProductModel.sync();
    await ProductImageModel.sync();
    await ProductCategoryModel.sync()
}

execute();