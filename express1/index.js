const express=require('express')
const app=express();

app.get("/get",(req,res)=>{
res.send("Welcome to get method");
})
app.get("/get/user",(req,res)=>{
    res.send("Welcome to get/user method")
})
app.post("/post",(req,res)=>{
    res.send("this is post method in express")
})
app.put("/put",(req,res)=>{
    res.send("this is put method in express")
})
app.delete("/delete",(req,res)=>{
    res.send("this is delete method in express js")
})
app.listen(7766,()=>{
    console.log("My Server is running on 7766 PORT number");
})