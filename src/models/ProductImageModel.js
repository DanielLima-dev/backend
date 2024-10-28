const connection = require("../database/connection");
const {DataTypes, Model} = require("sequelize");

const ProductImageModel = connection.define("ProductImageModel", {
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references :{
            model:{
                tableName: "product"
            },
            key: "id"
        }
    },
    path:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: "product_image"
});

module.exports = ProductImageModel;