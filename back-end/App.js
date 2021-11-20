const { default: axios } = require('axios')
const express = require('express')
const app = express()
let cors = require('cors')
module.exports = app
require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
require('dotenv').config()
const db = require('db')

//stuff with mongoose and dontev
const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String, 
    first_pass: String,
    second_pass: String, 
    allergies: String,
})
const User = mongoose.model('User', userSchema, "users")

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
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

const dishSchema = new mongoose.Schema({
    id: Number,
    name: String,
    restaurant: Number,
    description: String,
    ingredients: String
})
const Dish = mongoose.model('Dish', dishSchema)

const resetRequest = new mongoose.Schema({
    id: Number,
    email: String,
    date: String
})
const ResetRequest = mongoose.model('ResetRequest', resetRequest)

const contactRequest = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    message: String
})
const ContactRequest = mongoose.model('ContactRequest', contactRequest)

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

/*
const jwt = require("jsonwebtoken")
app.use(passport.initialize()) // tell express to use passport middleware

const { jwtOptions, jwtStrategy } = require("./jwt-config.js") // import setup options for using JWT in passport
passport.use(jwtStrategy)
*/

app.use(cors())

//when the user signs in 
app.post("/login", (req, res, next) => {
    const password = process.env.PASSWORD;
    mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/users?retryWrites=true&w=majority');
    User.find({first_name: req.body.first_name}, function (err, docs) {
        if (docs[0].password === req.body.password){
            res.status(200).json({"message": "Success"})
        }
        else{
            res.status(200).json({"message": "Failure"})
        }
      });
    console.log("Successfully logged in user!")

})
//when the user creates an account
app.post("/createaccount", (req, res) => {
    const password = process.env.PASSWORD;
    mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/users?retryWrites=true&w=majority');
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
    const password = process.env.PASSWORD;
    mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/restaurants?retryWrites=true&w=majority');
    Restaurant.find({city: req.body.location, rating: parseInt(req.body.rating), type: req.body.food_type}, function(err, docs){
        res.status(200).send(docs);
    });
    console.log("resturants /POST hit.")
    
})


//passport.authenticate("jwt", {successRedirect: '/restaurants', failureRedirect: '/login', failureFlash: true}),

