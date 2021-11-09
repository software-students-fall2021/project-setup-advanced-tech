const { default: axios } = require('axios')
const express = require('express')
const app = express()
let cors = require('cors')
module.exports = app
require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data


app.use(cors())

//when the user signs in 
app.post("/login", (req, res, next) => {
    res.status(200).json(
        {"message": "Success",
        "data": req.body
    })
    console.log("Successfully logged in user!")
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

