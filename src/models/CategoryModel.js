const connection = require("../database/connection");
const {DataTypes} = require("sequelize");

const CategoryModel = connection.define("CategoryModel", {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    slug: DataTypes.STRING(255)
}, {
    tableName: "category"
});

CategoryModel.sync();
module.exports = CategoryModel;

