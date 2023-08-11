const authController = require("../controllers/auth_controller");
const express = require('express');
const router = express.Router();

router.get('/signup', authController.signuppage);
router.post('/signup', authController.signup);

router.get('/login', authController.loginPage);
router.post('/login', authController.login);


module.exports = router;