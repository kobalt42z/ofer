const mongoose = require("mongoose");
const Joi = require("joi");


const categorySchema = new mongoose.Schema({
  name:String,
  url_code:String,
  info:String,
  img_url:String
})


exports.CategoryModel = mongoose.model("categories",categorySchema);


exports.validteCategory = (_reqBody) => {
  let joiSchema = Joi.object({
    name:Joi.string().min(2).max(99).required(),
    url_code:Joi.string().min(2).max(99).required(),
    info:Joi.string().min(2).max(400).required(),
    img_url:Joi.string().min(2).max(400).allow(null,"")
  })
  return joiSchema.validate(_reqBody);
}