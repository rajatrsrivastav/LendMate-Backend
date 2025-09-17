const express = require("express")

const {registerUser,loginUser} = require('../controller/auth.controller')
const authRoutes = express.Router()

authRoutes.post('/signup',registerUser)
authRoutes.post('/login',loginUser)

module.exports=authRoutes;