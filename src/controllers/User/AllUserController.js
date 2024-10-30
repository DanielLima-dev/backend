const UserModel = require("../../models/UserModel");

module.exports = async (request, response) => {
    let users = await UserModel.findAll();
    return response.json(users);
};