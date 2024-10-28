const UserModel = require("../models/UserModel");
const ProductModel = require("../models/ProductModel");
const ProductImageModel = require("../models/ProductImageModel");
const ProductCategoryModel = require("../models/ProductCategoryModel");
const CategoryModel = require("../models/CategoryModel");
const ProductOptionModel = require("../models/ProductOptionModel");


async function execute(){
    await CategoryModel.sync({alter: true});
    await UserModel.sync({alter: true});
    await ProductModel.sync({alter: true});
    await ProductOptionModel.sync({alter: true});
    await ProductImageModel.sync({alter: true});
    await ProductCategoryModel.sync({alter: true});
    
}

execute();