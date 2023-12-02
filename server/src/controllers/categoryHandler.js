const Category = require('../models/category.js')

function AddCategory(req,res){
    console.log(req.body)
    const category = new Category({
        categoryname: req.body.categoryname,
    })
    Category.exists({categoryname:category.categoryname})
        .then((check)=>{
            if(check){
                res.status(400).json({message:"Category exists"})
            }
            else{
                category.save()
                    .then(() => {
                        res.status(200).json({ message: "Category created" });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({ message: "Internal error" });
                    });
                
            }
        })
}

module.exports = {
    AddCategory,
}