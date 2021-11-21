const { default: axios } = require('axios')
const express = require('express')
const app = express()
//require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {type: String, require:true},
  email: {type: String, require:true}, 
  is_retaurant: {type: String, default:"1"}, // "1" means the user and "0" means the restaurant
  password: {type: String, require:true},
  allergies: {type: String, default:""}, 
})
module.exports = mongoose.model('User', userSchema)
