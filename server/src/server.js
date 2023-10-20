const express = require('express')
const bodyParser = require('body-parser');
const User = require("./models/user.js")
const addPost = require("./routes/addPost.js")
const getAllPosts = require("./routes/getAllPosts.js")
const delete1 = require('./routes/deletepost.js')
const addComment = require('./routes/addComment.js')

const app = express()
const port = 5000

app.use(bodyParser.json());
app.get("/api",(req,res) => {
    console.log("req.body")
    res.json({User})
})
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/new",addPost)
app.use("/getall",getAllPosts)
app.use("/delete",delete1)
app.use("/addcomment",addComment)
// app.post("/new",(req,res)=>{
//     console.log('recieved')
//     res.json({stat: 200})
//     addNew()
// })
app.listen(port,() => {console.log("Server is running on port 5000")})