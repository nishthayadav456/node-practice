const mess=require("../middleware/mess")
const {bollywoodControler,hollywoodControler}=require('../routing/categoryControl')
const categoryRouting=require("express").Router()
categoryRouting.get("/bollywood",mess,bollywoodControler)
    // res.send(bollywood)

categoryRouting.get("/hollywood",hollywoodControler)
    // res.send(hollywood)

module.exports=categoryRouting