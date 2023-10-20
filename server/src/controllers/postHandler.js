var posts = require('../models/posts.js')

function addNew(req,res){
    let i = Math.max(...posts.map(o => o.id)) + 1
    if(Object.keys(posts).length<=0) i = 0
    posts.push({
        id:i,
        content:req.body.content,
        comment:[]
    })
    if(typeof(i)==='undefined' || i == null) i = 1;
    console.log(posts);
    res.json({posts});
}
function getAllPosts(req,res){
    console.log(posts)
    res.json({posts})
}
function delete1(req,res){
    posts.map((value,key)=>{
        if(value.id==req.body.id){
            let newarray = posts.slice(0,key).concat(posts.slice(key+1,Object.keys(posts).length))
            posts=newarray;
            return;
        }
    })
    res.json({posts})
}
function addComment(req,res){
    posts.map((value,key)=>{
        if(value.id==req.body.id){
            posts[key].comment.push(req.body.comment)
            return;
        }
    })
    res.json({posts})
}
module.exports = {
    addNew,
    getAllPosts,
    delete1,
    addComment,
}