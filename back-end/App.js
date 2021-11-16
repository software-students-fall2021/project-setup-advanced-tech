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
require('dotenv').config()
const db = require('db')


var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

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


main().catch(err => console.log(err))
async function main() {
    await mongoose.connect('mongodb://localhost:3000/test')
    //for test purposes; defining users and restaurants; representations of resstaurants, users, and dishes
    const restaurantSchema = new mongoose.Schema({
        id: Number,
        name: String,
        city: String,
        state: String,
        address: String,
        telephone: String,
        rating: Number,
        type: String,
        zip: String,
    })

    const Restaurant = mongoose.model('Restaurant', restaurantSchema)

    const userSchema = new mongoose.Schema({
        first_name: String,
        last_name: String, 
        email: String, 
        first_pass: String, //THESE MUST BE STORED IN .ENV; JUST DOING THIS FOR TEST PURPOSES
        second_pass: String, 
        allergies: String, //CHECK THIS; MAY BE A LIST!
    })
    const User = mongoose.model('User', userSchema)

    const dishSchema = new mongoose.Schema({
        name: String, 
        restaurant: Restaurant, 
        description: String,
        ingredients: String, //check this! May be a LIST
    })
    const Dish = mongoose.model('Dish', dishSchema)

    //special user; there all the time
    const foo_bar = new User({first_name: "Foo", last_name: "Bar", email: "foo.bar@yahoo.com", first_pass:"abcd", second_pass:"abcd", allergies: "nuts"})
    await foo_bar.save()
    //defining restaurants, dishes, and users; must be modified
}

app.use(cors())

//when the user signs in 
app.post("/login", passport.authenticate('local', {successRedirect: '/restaurants', failureRedirect: '/login', failureFlash: true}),(req, res, next) => {
   if (successRedirect){
    res.status(200).json(
        {"message": "Success",
        "data": req.body
    })
    console.log("Successfully logged in user!")
   } 
   else{
       //go to the login and respond with error message
       res.send("Sorry. Couldn't log in. Please try again.")
       console.log("Couldn't log in. ")
   }
   
})
//when the user creates an account
app.post("/createaccount", (req, res) => {

    if (!(req.body.first_pass === req.body.second_pass)){
        res.status(400).json({
            "message": "Failure",
            "data": JSON.stringify(req.body)
        })
        console.log("Passwords do not match");
    }
    else if (req.body.email === null || req.body.email === ''){
        res.status(400).json({
            "message": "Failure",
            "data": JSON.stringify(req.body)
        })
        console.log("Email cannot be null.");
    } 
        
    
    const name = req.body.first_name + req.body.last_name 
    const email = req.body.email
    const password = req.body.first_pass
    const allergies = req.body.allergies

    const obj = {
        "firstname": req.body.first_name,
        "lastname": req.body.last_name,
        "email": req.body.email,
        "allergies": req.body.allergies
    }
    res.status(200).json(
        {
            "message": "Success",
            "data": req.body
        }
        )
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

