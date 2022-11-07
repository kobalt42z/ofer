const mongoose = require('mongoose');
const Joi = require('Joi');

const studentsSchema = new mongoose.Schema({
    name: String,
    score: Number,
    subject: String,
    date_created: {
        type: Date,
        default: Date.now(),
    },
})

exports.StudentModel = mongoose.model("students",
studentsSchema);

exports.validateStudent = (requestBody) =>{
    let joiSchema = Joi.object({
        name:Joi.string().min(2).max(50).required(),
        score:Joi.number().min(0).max(100).required(),
        subject:Joi.string().min(1).max(10).required()
    })
    return joiSchema.validate(requestBody) ;
}


