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
// use the mongoose
const mongoose = require('mongoose'); 
// connect to the database
const password = "weet123";
mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/weet')
const {isRestaurant, userRouter} = require('./Router/Users/User')
app.use('/users', userRouter)

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

const contactRequest = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    message: String
})
const ContactRequest = mongoose.model('ContactRequest', contactRequest)

app.use(cors())

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

const dishesRouter = require('./Router/Dishes/Dishes')
app.use('/dishes', dishesRouter)