const connection = require("../database/connection");
const {DataTypes, Model} = require("sequelize");

const ProductCategoryModel = connection.define("ProductCategoryModel",{
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model:{
            tableName: "product",
           
          },
        key: "id"
      }
    },

    category_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model:{
            tableName: "category",
           
          },
        key: "id"
      } 
    }
},{
  tableName: "product_category"
});

module.exports = ProductCategoryModel;