const express = require("express");
const router = express.Router();
const { validateStudent, StudentModel } = require('../models/studentsModel');

// מאזין לכניסה לראוט של העמוד בית לפי מה שנקבע לראוטר
// בקובץ הקונפיג
router.get("/", async (req, res) => {
 try {
  let data  = await StudentModel.find({})
  res.json(data);
 } catch (error) {
  res.status(500).json(error)
 }
})

router.post("/", async (req, res) => {
  let joicheck = validateStudent(req.body)
  if (joicheck.error) {
    return res.status(400).json(joicheck.error.details)
  }
  try {
    let student = new StudentModel(req.body)
    await student.save()
    res.json(student)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }

})

module.exports = router;