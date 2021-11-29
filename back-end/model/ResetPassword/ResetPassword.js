const { default: axios } = require('axios')
const express = require('express')
const app = express()
//require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose'); 

const resetRequest = new mongoose.Schema({
    id: Number,
    email: String,
    date: String
})

module.exports = mongoose.model('ResetPassword', resetRequest)