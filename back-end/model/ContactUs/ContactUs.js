const { default: axios } = require('axios')
const express = require('express')
const app = express()
//require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose'); 

const contactRequest = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    message: String
})

module.exports = mongoose.model('ContactRequest', contactRequest)