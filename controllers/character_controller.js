const express = require('express')
const router = express.Router()
const { Characters } = require('../models')



//Index Route
router.get('/', async (req,res) => {
    try {
        res.json(await Characters.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Create Route
router.post('/', async (req,res, next) => {
    try {
        res.json(await Characters.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
})

//Show Route
router.get('/:id', async (req,res) =>   {
    try {
        res.json(await Characters.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Update Route 
router.put("/:id", async (req, res) => {
    try {
      res.json(
        await Characters.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //Delete Route
router.delete("/characters/:id", async (req, res) => {
    try {
    res.json(await Characters.findByIdAndRemove(req.params.id));
    } catch (error) {
    res.status(400).json(error);
    }
});
  


  module.exports = router; 
