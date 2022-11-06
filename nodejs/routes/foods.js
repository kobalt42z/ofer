const express = require("express");
const router = express.Router();
const { FoodModel, valiatdeFood } = require('../models/foodModel');
router.get("/", async (req, res) => {
  try {
    let data = await FoodModel.find({});
    res.json(data);
    console.log('req for foods');
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }


})
router.post("/", async (req, res) => {
  let joicheck = valiatdeFood(req.body)
  if (joicheck.error) {
    return res.status(400).json(joicheck.error.details)
  }

  try {
    let food = new FoodModel(req.body)
    await food.save()
    res.json({msg:"saved sucssesfuly"})
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.delete("/:idDel", async (req, res) => {
  let idDel = req.params.idDel
  // if (joicheck.error) {
  //   return res.status(400).json(joicheck.error.details)
  // }

  try {
    let data  = await FoodModel.deleteOne({_id:idDel})

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})


router.post("/:idEdit", async (req, res) => {
  let joicheck = valiatdeFood(req.body)
  if (joicheck.error) {
    return res.status(400).json(joicheck.error.details)
  }

  try {
    let idEdit = req.params.idEdit
    let data = await FoodModel.updateOne({_id:idEdit},req.body)
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router;