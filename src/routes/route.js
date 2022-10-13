const express = require('express');
const{ createUsers} = require("../controller/userController")
const router = express.Router();


router.post("/rohiniData",createUsers)


module.exports = router;