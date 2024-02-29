// const http=require("http")//core module it is providing the set of functions and methods.
// const {dummyData}=require("./dummyData")
// //postman
// const details=JSON.stringify(dummyData)

// const app = http.createServer((req,res)=>{
//     console.log(req.url,'fetch the path from base url')
//     req.method=="PUT"
//     if(req.url ==="/post" && req.method=="POST"){
//         res.write("this is our port page")
        
//         res.write(details)
//         res.write("Anjali")
//         res.write("Isha")
//         res.write("preeti")
//         res.write("varnika")
//         res.write("saumya")
        
//         res.end()
//     }
//     else if(req.url === '/comment' && req.method==="PUT"){
//         res.write("this is our comment  page")
//         res.write("<h1>This is our heading tag</h1>")
//         res.write("<p> This is paragraph tag</p>")
//         res.write("<h3> This is h3 tag</h3>")
//         res.write("<table><tr><td> This is table tag</td></tr></table>")
        
//         res.end()
//     }
//     else if(req.url === '/' && req.method==="GET"){
//         res.write("this is our home page")
//         res.end()
//     }
//     else{
//         res.write("404 page not found")
//         res.end();
//     }
   

// });
// app.listen(4000,()=>{
//     console.log("server is running on port no 4000")
// })
//http://localhost:4000
//http://localhost:4000/post
//http://localhost:4000/comment
//https://jsonplaceholder/posts


//Express:
// const express=require("express")
// const app1=express();
// const blogroute=require("./router/blogRouter")
// app1.use(blogroute) //middleware
// app1.post("/",(req,res)=>{
//     res.send("This is express page")//it replace both functionality eg. res.write ,res.end

//     app1.post("/login",(req,res)=>{
//         res.send("This is express page")
//     })
//     app1.post("/signup",(req,res)=>{
//         res.send("This is express page")
//     })
//     app1.post("/logout",(req,res)=>{
//         res.send("This is express page")
//     })
//     app1.post("/post",(req,res)=>{
//         res.send("This is express page")
//     })
//     app1.post("/bollywood",(req,res)=>{
//         res.send("This is express page")
//     })
//     app1.post("/hollywood",(req,res)=>{
//         res.send("This is express page")
//     })
// })
// app1.get("/post/DB",(req,res)=>{
// res.send("this is post ")
// })
// // app.delete()
// // app.put()
// app1.listen(4001,()=>{
//     try{
//         console.log("server is running in port 4001")
//     }
//     catch(err){
//         console.log("error")
//     }
   
// })

const express=require('express');
const categoryRouting=require('./routing/categoryRouting')
const app=express();
const cors=require("cors")
app.use(cors({
    origin:"*" //for accessing anywhere
}))
const middleware1=(req,res,next)=>{
    console.log("middleware1 run first and the he is going to hit the API")
    next()
}
const middleware2=(req,res,next)=>{
    console.log("middleware2 run first and the he is going to hit the API")
    next()
}
const middleware3=(req,res,next)=>{
    console.log("middleware3 run first and the he is going to hit the API")
    next()
}
app.use(middleware1)//Apllication level middleware
app.use(middleware2)
app.use(middleware3)
app.use("/api",categoryRouting);
app.get('/',(req,res)=>{
    console.log("home page")
    res.send('ApI is running fine')
});
app.get('/contact',middleware2,(req,res)=>{ //specific middleware
   
    res.send('contact running fine')
})
app.listen(4002,()=>{
    try{
        console.log('server is running in port 4002')
    }
    catch(err){
        console.log('error found')
    }
});