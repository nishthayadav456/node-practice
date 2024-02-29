const a=10
const b=20
console.log(a)
console.log(b)

function add(a,b){
    const c=a+b
   console.log(c)
}
add(40,50)

const fs=require("fs") //importing a core module and third party module is smae  that is fs is :file system module
//read,write ,append,delete,renamefiles
const localmodule=require('./package.json')//importing local module ,you have to provide the path of that module.

fs.writeFileSync("text.txt","hello m nishtha")//access token ,refresh token,client ID
fs.writeFileSync("example.txt","this is my second value")//it will overlapthe first text to optimise that we ahve to use.
fs.appendFileSync('text.txt',"this is our appending data")//for appending the data without lossing first value.
fs.renameSync("text.txt","data.txt")//for rename the file
