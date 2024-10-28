const connection = require("../database/connection");
const {DataTypes, Model} = require("sequelize");

const ProductOptionModel = connection.define("ProductOptionModel", {
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
  title: DataTypes.STRING(20)
}, {
  tableName: "product_option"
});

module.exports = ProductOptionModel;