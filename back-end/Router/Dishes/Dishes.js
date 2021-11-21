const dishesRouter = require('express').Router()
const dishInfo = require('../../model/dish/Dishes')
//Search dishes by restaurant id, called in restaurant display pages
dishesRouter.get("/restaurant/:restaurant_id", (req, res) => {
  const restaurant = req.params.restaurant_id
  console.log(restaurant)
  dishInfo.find({restaurant:restaurant},function(err, doc){
    if(err){
      console.log(err)
      res.status(500).json({
        "message": err
      })
    }else{
      console.log(doc)
      res.json(doc)
    }
  })
})

// get dishes by dish id, called in dish profile pages
dishesRouter.get("/dish/:dishes_id", (req, res) => {
  const dish = req.params.dishes_id
  dishInfo.find({id:dish},function(err, doc){
    if(err){
      console.log(err)
      res.status(500).json({
        "message": err
      })
    }else{
      console.log(doc)
      res.json(doc)
    }
  })
})

module.exports = dishesRouter