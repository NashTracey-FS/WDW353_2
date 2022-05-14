const http = require('http');
const express = require('express');
const app = express();

//server your css and static files
app.use(express.static(__dirname));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+'/about.html')
});

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})

//server running
http.createServer(app).listen(8085,()=>{
    console.log(`Server running on port 8085`)
})