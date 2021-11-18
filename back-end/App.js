const { default: axios } = require('axios')
const express = require('express')
const app = express()
let cors = require('cors')
module.exports = app
require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

//stuff with mongoose and dontev
const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String, 
    first_pass: String, //THESE MUST BE STORED IN .ENV; JUST DOING THIS FOR TEST PURPOSES
    second_pass: String, 
    allergies: String, //CHECK THIS; MAY BE A LIST!
})
const User = mongoose.model('User', userSchema)
require('dotenv').config()
const db = require('db')

app.use(cors())

//when the user signs in 
app.post("/login", (req, res, next) => {
    const password = process.env.PASSWORD;
    mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/users?retryWrites=true&w=majority');
    const results = []
    User.find({first_name: req.body.first_name}, function (err, docs) {
        results = docs
      });
    if (results[0].password === req.body.password){
        res.status(200).json(
            {"message": "Success",
            "data": req.body
        })
    }
    else{
        res.status(200).json({"message": "Failure"})
    }
    console.log("Successfully logged in user!")
})
//when the user creates an account
app.post("/createaccount", (req, res) => {

    if (!(req.body.first_pass === req.body.second_pass)){
        res.status(200).json({
            "message": "Password do not match.",
        })
    }
    else if (req.body.email === null || req.body.email === ''){
        res.status(200).json({
            "message": "Email cannot be null."
        })
    }
    const password = process.env.PASSWORD;
    mongoose.connect('mongodb+srv://admin-weet:' + password + '@weet.ze06y.mongodb.net/users?retryWrites=true&w=majority');
    let toInsert = new User(
        {first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        first_pass: req.body.first_pass,
        allergies: req.body.allergies})
        toInsert.save(function (err, book) {
            if (err){
                res.status(200).json({
                    "status": "Failure"
                })
            }
            else{
                res.status(200).json({
                    "status": "Success"
                })
            }
        })
        console.log("Succesful registration");

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

    const location = req.body.location
    const rating = req.body.rating
    const type = req.body.type
    const allergies = req.body.type

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

      res.status(200).send(data);
    
})

