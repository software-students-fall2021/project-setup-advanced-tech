const userRouter = require('express').Router()
const userInfo = require('../../model/user/User')
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose');

const secret = 'register-rule'
userRouter.get('/list',(req, res)=>{
  userInfo.find({},function(err, doc){
    console.log("hello")
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
// middle ware to check whether the incoming user is restaurant or customer
const isRestaurant = async (req, res, next) =>{
  const token = req.headers.authorization.split(" ").pop()
  const user_obj = jwt.verify(token, secret)
  const _id = user_obj._id
  const username = user_obj.username
  const id = mongoose.Types.ObjectId(_id)
  const user = userInfo.find({id:id})
  if(!user){
    res.status(422).send("user error")
  }else{
    if(username !== user.username){
      res.status(422).send("user error")
    }else{
      if(user.isRestaurant === "1"){
        res.status(409).send("no authorization")
      }else{
        next()
      }
    }
  }
}

userRouter.post('/register',(req, res)=>{
  if(req.body.user){
    res.status(409).send("Please input user name")
  }else{
    const user = userInfo.findOne({username: req.body.username}, function(err, doc){
      if(err){
        res.status(409).send("Buggy code")
      }else if(doc){
        console.log(doc)
        res.status(409).send("The user already existed")
      }else{
        new_user = new userInfo(req.body)
        new_user.save()
              .then(user => res.json(user))
      }
    })
  }
})

userRouter.post('/login', (req,res)=>{
  if(req.body.user){
    res.status(409).send("Please input user name")
  }else{
    userInfo.findOne({username: req.body.username}, function(err, doc){
      if(err){
        res.status(409).send("Buggy code")
      }else if(!doc){
        console.log(doc)
        res.status(409).send("The user not existed")
      }else{
        if(req.body.password !== doc.password){
          res.status(422).send("The password incorrect")
        }else{
          console.log(doc)
          const _id = doc._id
          const username = doc.username
          const token = jwt.sign({_id, username},secret, {expiresIn: '24h'})
          console.log(token)
          res.send(token)
        }
      }
    })
  }
})

userRouter.get('/verify', (req, res)=>{
  const token = req.headers.authorization.split(" ").pop()
  const user = jwt.verify(token, secret)
  const _id = user._id
  const username = user.username
  console.log(_id)
  console.log(username)
})

module.exports = {isRestaurant, userRouter}