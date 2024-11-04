const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
ProductModel.afterDestroy(function(){
    console.log("Foi destruido")
});
const {deleteMany} = require('../../services/product-images')

module.exports = async (request, response) => {
    let images = await ProductImageModel.findAll({
        attributes:['path'],
        where: {
            product_id: request.params.id
        }
    });

   let count = await ProductModel.destroy({
        where: {
            id: request.params.id
        }

    });

    if(count > 0){

        deleteMany(images.map(image => image.path));

    }
    

    return response.status(204).end();

}