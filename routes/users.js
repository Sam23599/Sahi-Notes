const  userController = require("../controllers/users_controllers");
const express = require('express');
const router = express.Router();

router.get('/', userController.homeController2 )
router.get('/profile/about', userController.homeController);

module.exports = router;
