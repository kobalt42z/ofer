const express= require("express");
const { validteCategory, CategoryModel } = require("../models/categoryModel");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Categories work"});
})


// רק משתמש אדמין יוכל להוסיף קטגוריות
router.post("/" ,async(req,res) => {
  let validBody = validteCategory(req.body);
  // אם יש טעות יזהה מאפיין אירור בולידבאדי
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
    let category = new CategoryModel(req.body);
    // להוסיף את עצמו כרשומה
    await category.save();
  res.status(201).json(category);
  }
  catch(err){
    if(err.code == 11000){
      return res.json({msg:"url_code already in system",code:11000})
    }
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;