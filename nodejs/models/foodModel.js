const mongoose = require("mongoose");
const Joi = require('Joi');

const foodSchema = new mongoose.Schema({
  name:String,
  cals:Number,
  price:Number,
  img_url:String
})


exports.FoodModel = mongoose.model("foods",foodSchema,);

exports.valiatdeFood = (reqBody)=>{
    let joiSchema = Joi.object({
      name:Joi.string().min(2).max(150).required(),
      cals:Joi.number().min(1).max(9999).required(),
      price:Joi.number().min(1).max(9999).required(),
      // *allow is keyword that allow you to sand request of type passed in args 
      // *in our example "" |null  is mean that you can sand it empty 
      // ? allow(allowed values)
      img_url:Joi.string().min(2).max(300).allow(null,"")
    })
    return joiSchema.validate(reqBody);
}