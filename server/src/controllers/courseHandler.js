const Account = require("../models/account.js")
const Tutor = require("../models/tutor.js")
const User = require("../models/user.js")
const Teach = require('../models/teach.js')
const Lesson = require('../models/lesson.js')

function AddCourse(req,res){
    if(req.session.role==='tutor'){
        try{
            const course = new Teach({
                tutorid: req.session.userinfo._id,
                thumbnail: req.body.thumbnail,
                coursename: req.body.coursename,
                category: req.body.category,
                level: req.body.level,
                description: req.body.description,
            })
            // console.log(course)
            course.save()
                .then(result=>{
                    for(let lesson of req.body.lessons){
                        let temp = new Lesson({
                            courseid:result._doc._id,
                            content:lesson,
                        })
                        temp.save()
                            .catch(err=>{
                                console.log(err)
                                res.status(400).json({message:"Internal error"})
                            })
                    }
                    res.status(200).json({message:"Course added"})
                })
                .catch(error=>{
                    console.log(error)
                    res.status(400).json({message:"Internal error"})
                })
        }
        catch(err){
            console.log(err)
            res.status(400).json({message:"Internal error"})
        }
    }
    else{
        res.status(405).json({message:"Tutor session does not exist"})
    }
}
function getTutorCouse(req,res){
    if(typeof(req.session.userinfo)==='undefined' || req.session.userinfo===null){
        res.status(200).json({message:"Tutor session does not exist"})
    }
    else{
        Teach.find({tutorid:req.session.userinfo._id})
            .then(docs=>{
                res.status(200).json({courses:docs})
            })
    }
    
}
module.exports={
    AddCourse,
    getTutorCouse,
}