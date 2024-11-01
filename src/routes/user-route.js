const express = require("express");

let router = express.Router();

const AllUserController = require("../controllers/User/AllUserController");
const CreateUserController = require("../controllers/User/CreateUserController");


router.get('/users', AllUserController);
router.post('/users', CreateUserController);

module.exports = router;