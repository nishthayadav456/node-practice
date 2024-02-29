const { register } = require("../controller/userController")

const userRouter=require("express").Router()
userRouter.post("/register",register)
module.exports=router