const Account = require("../models/account.js")
const Tutor = require("../models/tutor.js")
const User = require("../models/user.js")


/*function addUser(req, res) {
    // const user = new Account({
    //     username: req.body.username,
    //     password: req.body.password,
    //     role: req.body.role,
    //     active: false,
    //     recoveremail: req.body.recoveremail,
    // })
    const student = new Student({
        fullname: req.body.name,
        courseID: [],
    })
    student.save()
        .then((studentresult) => {
            Account.exists({username: req.body.username})
                .then((check)=>{
                    if(check){
                        Student.deleteOne({_id: studentresult._id})
                            .then(() => res.json({message: "Account Existed"}))
                    }
                    else{
                        const user = new Account({
                            username: req.body.username,
                            password: req.body.password,
                            role: req.body.role,
                            active: false,
                            recoveremail: req.body.recoveremail,
                            userinfo: studentresult._id,
                        })
                        user.save()
                            .then((result)=>{res.json({message:"Account Created"})})
                            .catch((err) => {
                                Student.deleteOne({_id: studentresult._id})
                                console.log(err)
                                res.json({message: "Error occrued while trying to create account"})
                            })
                    }
                })
        })
        .catch((err)=>{
            console.log(err)
            res.json({message:"Error occured while trying to create account"})
        })
}*/

/*function addLecturer(req,res){
    const lecturer  = new Lecturer({
        fullname: req.body.name,
        certifications: req.body.certifications,
    })
    lecturer.save()
        .then((result)=>{
            Account.exists({username: req.body.username})
                .then((check)=>{
                    if(check){
                        Lecturer.deleteOne({_id:result._id})
                            .then(()=>res.json({message:"Account existed"}))
                    }
                    else{
                        const user = new Account({
                            username: req.body.username,
                            password: req.body.password,
                            role: req.body.role,
                            active: false,
                            recoveremail: req.body.recoveremail,
                            userinfo: result._id,
                        })
                        user.save()
                            .then(()=>{res.json({message:"Account Created"})})
                            .catch((err)=>{
                                Lecturer.deleteOne({_id:result._id})
                                console.log(err)
                                res.json({message:"Error occured while trying to create account"})
                            })
                    }
                })
        })
        .catch((err)=>{
            console.log(err)
            res.json({message:"Error occured while trying to create account"})
        })
}*/
function createAccount(req,res){
    console.log(req.body)
    const account = new Account({
        username: req.body.username,
        password:req.body.password,
        role:req.body.role,
    })
    Account.exists({username:account.username})
        .then((check)=>{
            if(check){
                res.status(400).json({message:"Uername exists"})
            }
            else{
                account.save()
                    .then(doc=>{
                        try{
                            if(req.body.role===1){
                                const user = new User({
                                    name:req.body.name,
                                    email:req.body.email,
                                    avatar:req.body.avatar,
                                    accountid:doc._id,
                                    })
                                user.save()
                                    .then(result=>{
                                        req.session.userinfo=result
                                        req.session.role='student'
                                        res.status(200).json({message:"Account created"})
                                    })
                            }
                            else if(req.body.role==2){
                                const tutor = new Tutor({
                                    name:req.body.name,
                                    email:req.body.email,
                                    avatar:req.body.avatar,
                                    accountid:doc._id,
                                    titles: req.body.titles,
                                })
                                tutor.save()
                                    .then(result=>{
                                        req.session.userinfo=result
                                        req.session.role='tutor'
                                        res.status(200).json({message:"Account created"})
                                    })
                            }
                            else{
                                res.status(401).status({message:"Interal error"})
                            }
                        }
                        catch(err){
                            console.lof(err)
                            Account.remove({_id:doc._id})
                                .then(()=>res.status(401).status({message:"Interal error"}))
                        }
                    })
            }
        })
}
function signIn(req,res){
    Account.findOne({username:req.body.username,password:req.body.password})
        .then((result)=>{
            // console.log(result)
            if(typeof(result)!=='undefined' && result!==null){
                if(result._doc.role==='1'){
                    User.findOne({accountid:result._doc._id})
                        .then((user)=>{
                            if(typeof(user)!=='undefined' && user!==null){
                                // console.log(user._doc)
                                req.session.userinfo=user._doc
                                req.session.role='student'
                                res.status(200).json({signin:true})
                            }
                            else res.status(405).json({signin:false})
                        })
                }
                else if(result._doc.role==='2'){
                    Tutor.findOne({accountid:result._doc._id})
                        .then((user)=>{
                            if(typeof(user)!=='undefined' && user!==null){
                                req.session.userinfo=user._doc
                                req.session.role='tutor'
                                res.status(200).json({signin:true})
                            }
                            else res.status(405).json({signin:false})
                        })
                }
                else res.status(405).json({signin:false})
            }
            else{
                // console.log("Wrong")
                res.status(405).json({signin:false})
            }
        })
        .catch(error=>{
            console.log(error)
            res.status(405).json({signin:false})
        })
}
function updateProfile(req,res){
    // console.log(req.session)
    if(typeof(req.session.userinfo)==='undefined' || req.session.userinfo===null){
        res.json({confirm:false})
    }
    else{
        if(req.body.role==='student'){
            User.findOneAndUpdate({accountid:req.body.accountid},{
                name:req.body.name,
                avatar: req.body.file,
            }).then((result)=>{
                req.session.userinfo=result._doc
                // console.log(result)
                res.status(200).json({message:"Test"})
            })
        }
        else{
            Tutor.findOneAndUpdate({accountid:req.body.accountid},{
                name:req.body.name,
                avatar: req.body.file,
                titles:req.body.titles,
            },{returnOriginal:false}).then((result=>{
                req.session.userinfo=result._doc
                // console.log(result)
                res.status(200).json({message:"User modified"})
            }))
        }
    }

    // res.status(200).json({message:"Test"})
}
module.exports = {
    createAccount,
    signIn,
    updateProfile,
}