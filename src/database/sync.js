const UserModel = require("../models/UserModel");
const ProductModel = require("../models/ProductModel");
const ProductImageModel = require("../models/ProductImageModel");
const ProductCategoryModel = require("../models/ProductCategoryModel");
const CategoryModel = require("../models/CategoryModel");
const ProductOptionModel = require("../models/ProductOptionModel");


async function execute(){
    await CategoryModel.sync();
    await UserModel.sync();
    await ProductModel.sync();
    await ProductOptionModel.sync();
    await ProductImageModel.sync();
    await ProductCategoryModel.sync();
    
}

execute();