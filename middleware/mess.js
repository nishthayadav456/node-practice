const mess=(req,res,next)=>{
    console.log("mess. middleware")
    const age=20
    if(age>=18){
        next()
    }
    else{
        res.send("user not allowed")
    }
}
module.exports=mess