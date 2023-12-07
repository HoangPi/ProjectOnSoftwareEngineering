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
function getCategory(req, res) {
    Category.find({})
      .then(categories => {
        res.status(200).json({ categories });
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
      });
  }

module.exports = {
    AddCategory,
    getCategory,
}