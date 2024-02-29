const array=[] //database
const register=(req,res)=>{
    const data=req.body;

    const detail=array.find((item)=>{
        if(item.email===data.email){
            return item
        }
    });
    if (detail){
        return res.send ({message:"user already registered"})
    }
    array.push(data)
    console.log(array)
}
const login=(req,res)=>{
    const logindata=req.body;
    console.log("login details",logindata)
}
module.exports={register,login}