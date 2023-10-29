const Account = require("../models/account.js")
const Student = require("../models/student.js")
const Lecturer = require("../models/lecturer.js")


function addUser(req, res) {
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
}
function addLecturer(req,res){
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
}

module.exports = {
    addUser,
    addLecturer,
}