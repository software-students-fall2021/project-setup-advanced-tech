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
require('dotenv').config()
const db = require('db')

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
app.get("/restaurants", (req, res, next) => {
    const data = [
        {
        "name": "test",
        "telephone": "123-456-7891",
        "address": "123 Main st"
        },
        {
        "name": "carmine's",
        "telephone": "123-456-7891",
        "address": "123 Dam st"
        }
        ]
      console.log("Backup data initialized.");
      res.status(200).send(data)
    
})

//if the user searches for restaurants with location, rating, type, and allergies; Route probably has to be changed
app.post("/restaurants", (req, res, next) => {

    // const location = req.body.location
    // const rating = req.body.rating
    // const type = req.body.type
    // const allergies = req.body.type

    // const data = [
    //     {
    //     "name": "test",
    //     "telephone": "123-456-7891",
    //     "address": "123 Main st",
    //     "dishes": "another one"
    //     },
    //     {
    //     "name": "carmine's",
    //     "telephone": "123-456-7891",
    //     "address": "123 Dam st",
    //     "dishes": "pizza"
    //     }
    //     ]
    // res.status(200).json(data)
    // console.log("Successfully hitting post for /RESTAURANTS")

    /*
    const password = process.env.PASSWORD;
    mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/restaurants?retryWrites=true&w=majority');
    const results = []
    console.log(req.body.food_type)
    Restaurant.find({type: req.body.food_type, city: req.body.location, rating: parseInt(req.body.rating)}, function(err, docs){
        res.status(200).send(docs);
    });
    */
    
})


//passport.authenticate("jwt", {successRedirect: '/restaurants', failureRedirect: '/login', failureFlash: true}),

const dishesRouter = require('./Router/Dishes/Dishes')
app.use('/dishes', dishesRouter)