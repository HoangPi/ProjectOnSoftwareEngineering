const Account = require("../models/account.js")
const Tutor = require("../models/tutor.js")
const User = require("../models/user.js")
const Teach = require('../models/teach.js')
const Lesson = require('../models/lesson.js')
const Category = require('../models/category.js')
const Chapter = require('../models/chapter.js')
const Content = require('../models/content.js')
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
function getUserCouse(req,res){
    if(typeof(req.session.userinfo)==='undefined' || req.session.userinfo===null){
        res.status(200).json({message:"User session does not exist"})
    }
    else{
        Teach.find({studentsid:req.session.userinfo._id})
            .then(docs=>{
                res.status(200).json({courses:docs})
            })
    }
    
}
function getHomeCourse(req,res){
    Teach.find({})
        .then(docs=>{
            res.status(200).json({courses:docs})
        }).catch(error => {
            console.error("Error fetching courses:", error);
            res.status(500).json({ error: "Failed to fetch courses" });
          });
}
function getDetai(req,res){
    Teach.find({})
        .then(docs=>{
            res.status(200).json({courses:docs})
        }).catch(error => {
            console.error("Error fetching courses:", error);
            res.status(500).json({ error: "Failed to fetch courses" });
          });
}

function registerCourse(req, res) {
    
    const studentId = req.body.userid;
    const courseId= req.body.courseid;

    Teach.findOne({_id:courseId})
      .then((course) => {
        if (!course) {
            console.log("CourseID:",courseId);
            console.log("UserID:",studentId)
          return res.status(404).json({ message: "Course not found" });
        }
  
        // Check if student is already present in the course
        if (course.studentsid.includes(studentId)) {
          return res.status(400).json({ message: "Student is already enrolled in the course" });
        }
  
        // Add student to the course
        course.studentsid.push(studentId);
        course.save()
          .then((updatedCourse) => {
            res.status(200).json({ message: "Student added to course", course: updatedCourse });
          })
          .catch((error) => {
            res.status(500).json({ message: "Error adding student to course", error });
          });
      })
      .catch((error) => {
        res.status(500).json({ message: "Error finding course", error });
      });
  }
async function getCourseDetail(req,res){
    try{
        if(req.session.role==='tutor'){
            const chapters = await Chapter.find({course:req.body.courseid})
            for(let i in chapters){
                let temp = await Content.find({chapter:chapters[i]._id})
                if(Object.keys(temp).length<=0){
                    chapters[i]._doc.contents={content:[]}
                }
                else chapters[i]._doc.contents=temp
            }
            console.log(chapters)
            let r = []
            for(let c of chapters){
                r = [...r,{
                    name:c._doc.name,
                    contents:c._doc.contents,
                }]
            }
            res.json({chapters:r})
        }
        else{
            res.json({message:"Tutor session has timed out"})
        }
    }
    catch(err){
        console.log(err)
        res.json({message:err})
    }
}

async function getChapterContents(req, res) {
    try {
      if (req.session.role === 'student') {
        const chapterId = req.body.chapterId;
  
        const chapter = await Chapter.findById(chapterId);
        const contents = await Content.find({ chapter: chapterId });
  
        if (contents.length <= 0) {
          res.json({ chapter: chapter, contents: [] });
        } else {
          res.json({ chapter: chapter, contents });
        }
      } else {
        res.json({ message: 'Student session has timed out' });
      }
    } catch (err) {
      console.log(err);
      res.json({ message: err });
    }
  }


async function updateCourse(req,res){
    try{
        if(req.session.role==='tutor'){
            // Delete all
            console.log(req.body)
            let chapters = await Chapter.find({courseid:req.body.courseid})
            for(let chapter of chapters){
                await Content.deleteMany({chapter:chapter._id})
            }
            await Chapter.deleteMany({course:req.body.courseid})

            // Re-update
            for(let chapter of req.body.chapters){
                let c1 = new Chapter({
                    course: req.body.courseid,
                    name: chapter.name,
                })
                let doc = await c1.save()
                for(let content of chapter.contents){
                    let c2 = new Content({
                        content: content,
                        chapter: doc._id,
                    })
                    await c2.save()
                }
            }
            res.json({message:"Course updated"})
        }
        else{
            res.json({message:"Tutor session has timed out"})
        }
    }
    catch(err){
        console.log(err)
        res.json({message:err})
    }
}


module.exports={
    AddCourse,
    getTutorCouse,
    getUserCouse,
    getHomeCourse,
    registerCourse,
    getCourseDetail,
    getChapterContents,
    updateCourse,
}