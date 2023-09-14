const express = require("express");
const app = express();
const PORT = 4000;

app.get("/",(req,res)=>{
    res.send("Hello from Express Page!!!")
})

app.get("/home",(req,res)=>{
    res.send("Hello from Home Page!!!")
})

app.listen(PORT, ()=>{
    console.log(`The Server Running on http://localhost:${PORT}`)
})
