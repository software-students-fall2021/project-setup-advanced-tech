const { default: axios } = require('axios')
const express = require('express')
const app = express()
//require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose'); 

// define schema, fields in schema must correspond to the fields in database
const dishSchema = new mongoose.Schema({
  id: Number,
  name: String, 
  restaurant: Number, 
  ingredients: String, //check this! May be a LIST
})
module.exports = mongoose.model('Dishes', dishSchema)
