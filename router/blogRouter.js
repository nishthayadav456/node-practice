const blogroute=require("express").Router()
blogroute.post("/bollywood",(req,res)=>{
res.send({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
})
blogroute.post("/hollywood",(req,res)=>{
    res.send("This is a hollywood page")
    })
 blogroute.post("/fitness",(req,res)=>{
    res.send("This is a fitness page")
 })
blogroute.get("/food",(req,res)=>{
 res.send("<h1>This is a food page</h1>")
 })

module.exports=blogroute