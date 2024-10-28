const ProductModel = require("../src/models/ProductModel");
const ProductImageModel = require("../src/models/ProductImageModel");
const ProductOptionModel = require("../src/models/ProductOptionModel");

ProductModel.hasMany(ProductImageModel, {foreignKey: "product_id", as: "images"});

async function execute(){
    let product = await ProductModel.findOne({
        include:{
        model: ProductImageModel,
        as: "images"
        }
    });
    console.log(product.images[1].path);
};

ProductModel.hasMany(ProductOptionModel, {foreignKey: "product_id", as: "options"});

async function execute(){
    let product = await ProductModel.findOne({
        include:{
            model: ProductOptionModel,
            as: "options"
        }
    });

    console.log(product.options[1].title)
};


execute();