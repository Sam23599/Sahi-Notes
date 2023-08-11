const  userController = require("../controllers/users_controllers");
const express = require('express');
const router = express.Router();

router.get('/profile', userController.profilePage);

module.exports = router;
