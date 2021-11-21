const { default: axios } = require('axios')
const express = require('express')
const app = express()
let cors = require('cors')
module.exports = app
const bodyParser = require('body-parser')
require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require('dotenv').config()
const db = require('db')
const jwt = require("jsonwebtoken")

//stuff with mongoose and dontev
const mongoose = require('mongoose');  
const password = process.env.PASSWORD;
mongoose.connect("mongodb+srv://admin-weet:" + password + "@weet.ze06y.mongodb.net/weet?retryWrites=true&w=majority"); 

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    first_pass: String,
    second_pass: String,
    allergies: String

});
const User = mongoose.model('user', userSchema)

const restaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    city: String,
    state: String,
    address: String,
    telephone: String,
    rating: Number,
    type: String,
    zip: String
})
const Restaurant = mongoose.model('restaurants', restaurantSchema)

const contactRequest = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    message: String
})
const ContactRequest = mongoose.model('ContactRequest', contactRequest)

/*
const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
*/
app.use(cors())

//when the user signs in 
app.post("/login", (req, res, next) => {
    User.find({email: req.body.email, first_pass: req.body.password}, function (err, docs) {
        if (docs[0].first_pass === req.body.password){
            let userData = {
                first_name: docs[0].first_name,
                last_name: docs[0].last_name,
                email: docs[0].email,
                allergies: docs[0].allergies
            }
            const email = docs[0].email
            const token = jwt.sign({email}, process.env.secret, {
                expiresIn: 1000
            })
            res.status(200).json(
                {auth: true, token: token,
                data: userData}
                )
        }
        else{
            res.status(200).json({auth: false, token: null})
        }
      });
    console.log("Successfully logged in user!")

})
//when the user creates an account
app.post("/createaccount", (req, res) => {
    User.find({email: req.body.email}, function(err, docs){
        if (docs.length > 0){
            res.status(200).json({
                "message": "Email has already been taken."
            }) 
        }
        else{
            let toInsert = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                first_pass: req.body.first_pass,
                second_pass: req.body.second_pass,
                allergies: req.body.allergies
            })
                toInsert.save(function (err, docs) {
                    if (err){
                        res.status(200).json({
                            "message": "Failure"
                        })
                    }
                    else{
                        res.status(200).json({
                            "message": "Success"
                        })
                    }
                })
                console.log("Succesful registration");
        }
    })

})
//User wants to  reset password
app.post("/resetpassword", (req, res) => {
    res.status(200).json({
        "message" : "Success",
        "data": req.body
    })
    console.log("Successfully sent request to reset password.")
})

//User wants to contact us
app.post("/contactus", (req, res) => {
    const name = req.body.first_name + req.body.last_name
    const email = req.body.email //need to verify email
    const message = req.body.message //need to store message somewhere

    res.status(200).json(
        {
        "message": "Success",
        "data": req.body
        })
    console.log("success to contact")
})


//if the user just searches for restaurants without parameters
app.post("/restaurants", (req, res, next) => {
    const token = req.headers['x-access-token']
    jwt.verify(token, process.env.secret, (err, decoded)=> {
        if (err){
            Restaurant.find({city: req.body.location, rating: parseInt(req.body.rating), type: req.body.food_type}, function(err, docs){
                console.log(req.body)
                res.status(200).send(docs)
                console.log(docs)
            });
        }
        else{
            Restaurant.find({city: req.body.location, rating: parseInt(req.body.rating), type: req.body.food_type}, function(err, docs){
                let restaurants = []
                for (let i = 0; i < docs.length; i++){
                    let restaurant = JSON.parse(JSON.stringify(docs[i]))
                    let toAdd = JSON.parse(JSON.stringify(restaurant))
                    toAdd.dishes = []
                    for (let j = 0; j < restaurant.dishes.length; j++){
                        let ingredString = JSON.stringify(restaurant.dishes[j].ingredients)
                        if (!ingredString.includes(req.body.allergies)){
                            toAdd.dishes.push(restaurant.dishes[j])
                        }
                    }
                    if (toAdd.dishes.length > 0){
                        restaurants.push(toAdd)
                    }
                }
                res.status(200).json(restaurants)
            });
        }
    })
    
})


//passport.authenticate("jwt", {successRedirect: '/restaurants', failureRedirect: '/login', failureFlash: true}),

const dishesRouter = require('./Router/Dishes/Dishes')
app.use('/dishes', dishesRouter)