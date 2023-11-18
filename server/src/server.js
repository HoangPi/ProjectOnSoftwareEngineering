const express = require('express')
const session = require('express-session')

const databseURI = require("./database/databaseURI.js")
const mongoose = require("mongoose")

const app = express()
const port = 5000

const bodyParser = require('body-parser');
const signup = require('./routes/generalRoutes/signup.js')
const getusersession = require('./routes/generalRoutes/usersession.js')
const signout = require('./routes/generalRoutes/signout.js')
const signin =require('./routes/generalRoutes/signin.js')
const updateprofile = require('./routes/generalRoutes/updateprofile.js')

app.use(bodyParser.json());
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(session({
    secret: 'my-secret', // a secret string used to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false // don't create session until something stored
}))

app.use('/signup',signup)
app.use('/getusersession',getusersession)
app.use('/signout',signout)
app.use('/signin',signin)
app.use('/updateprofile',updateprofile)

// app.listen(port,() => {console.log("Server is running on port 5000")})
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

