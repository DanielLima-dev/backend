const connection = require("../database/connection");
const {DataTypes, Model} = require("sequelize");

const UserModel = connection.define("UserModel", {
    firstname:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
    type: DataTypes.STRING(45),
    allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    password:  {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
}
, {
    tableName: "user"
});

module.exports = UserModel;