const express = require('express')
const bodyParser = require('body-parser');
const addUser = require('./routes/addUser.js')
const addLecturer = require('./routes/addLecturer.js')

const databseURI = require("./database/databaseURI.js")
const mongoose = require("mongoose")

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
app.use('/newuser',addUser)
app.use('/newlecturer',addLecturer)

mongoose.connect(databseURI)
        .then((result)=>app.listen(port,() => {console.log("Server is running on port 5000")}))
        .catch((err)=>console.log(err))


// app.use("/new",addPost)
// app.use("/getall",getAllPosts)
// app.use("/delete",delete1)
// app.use("/addcomment",addComment)
// app.post("/new",(req,res)=>{
//     console.log('recieved')
//     res.json({stat: 200})
//     addNew()
// })

