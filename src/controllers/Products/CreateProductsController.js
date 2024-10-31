

const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const {saveByUrl} = require('../../services/product-images');

module.exports = async (request, response) => {
    let {
        name,
        price,
        slug
    } = request.body;

    let product;

    try{
        product = await ProductModel.create({
            name, price, slug
        });
    
    } catch(error) {
        response.status(400);
        return response.json({
            message: "Error ao criar produto"
        })
    }

    let images = [];

    try{
        for(let url of request.body.images){
            let {relativePath} = await saveByUrl({url, slug});
            images.push({
                product_id: product.id,
                path: relativePath
            });
        };

    } catch(error){
        console.log(error.message)
        response.status(400);
        return response.json({
            message: "Erro ao salvar imagens no produto " + product.id
        });

        console.log(error.message);
    }
    

    await ProductImageModel.bulkCreate(images);
    
    response.status(201);
    return response.json(product);

}