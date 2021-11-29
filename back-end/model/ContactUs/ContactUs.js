const { default: axios } = require('axios')
const express = require('express')
const app = express()
//require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose'); 

const contactRequest = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    message: String
})
const ContactRequest = mongoose.model('ContactRequest', contactRequest)
module.exports = mongoose.model('Dishes', dishSchema)