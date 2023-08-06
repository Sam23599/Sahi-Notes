const  userController = require("../controllers/users_controllers");
const express = require('express');
const router = express.Router();

// app.get('/auth', require)
router.use('/user', require('./users'));
router.use('/auth', require('./auth'));

module.exports = router;

