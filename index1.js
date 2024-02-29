const express=require('express')
const userRouter=require('./router/userRouter')
const app=express();
// const bodyParser=require("body-parser")
// app.use(bodyParser)
app.use(express.json()) //insteed of using body parser

app.use("/api"/userRouter)
app.listen(4005,()=>{
    console.log("server is running on port no. 4005 ")
})