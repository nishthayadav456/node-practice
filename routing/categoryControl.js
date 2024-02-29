const {bollywood,hollywood}=require("./data")
const bollywoodControler=(req,res)=>{
return res.send(bollywood)
}
const hollywoodControler=(req,res)=>{
    return res.send(hollywood)
    }
module.exports={bollywoodControler,hollywoodControler}