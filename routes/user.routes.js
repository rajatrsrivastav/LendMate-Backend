const express = require("express")

const {getUsers,getUsersById} = require('../controller/users.controller')
const authMiddleware = require("../middlewares/authmiddlewares")
const userRoutes = express.Router()

userRoutes.get('/',authMiddleware,getUsers)
userRoutes.get('/:id',authMiddleware,getUsersById)



module.exports=userRoutes;