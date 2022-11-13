const { string, number } = require("joi")
const Joi = require("joi")
const { default: mongoose } = require("mongoose")

const toysSchema  = new mongoose.Schema({
    name:string,
    info:string,
    category:string,
    imgUrl:string,
    price :number,
    dateOfCreation:{
        type:Date,
        default: Date.now(),
    }
})

exports.ToysModel = mongoose.model("Toys",toysSchema)


exports.validateToys = (requestBody)=>{
    let JoiSchema = Joi.object({
        name:Joi.string().min(2).max(30).required(),
        info:Joi.string().min(2).max(500).required(),
        category:Joi.string().min(2).max(15).required(),
        imgUrl:Joi.string().min(2).max(99999).required().allow(null,""),
        price:Joi.number().min(1).max(10000).required(),



    })
    return joiSchema.validate(requestBody);
}