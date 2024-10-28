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
  title:{
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  shape: {
    type: DataTypes.ENUM("square", "circle"),
    defaultValue:"square",
    allowNull: false,
  },
  radius:{
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  type:{
    type: DataTypes.ENUM("text", "color"),
    defaultValue: "text",
    allowNull: false
  },
  values: DataTypes.STRING(255)
}, {
  tableName: "product_option"
});

module.exports = ProductOptionModel;