const { default: axios } = require('axios')
const express = require('express')
const app = express()
module.exports = app
require("dotenv").config({ silent: true })
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// still lack Search restaurant by Id, Search city by state, Search Dish collection by user id, Search Restaurant collection by user id,
// Search user by id, Add Restaurant, Add Dishes, Collect Dishes, Collect Restaurants, Delete Dishes Collections,
// Delete Restaurant Collections, Delete Restaurant
// We are still learning backend and deal with frontend work. So we will fill the blank in the future.

//if the user just searches for restaurants without parameters
// possible input 
app.get('/restaurants', (req, res) => {

    axios
        .get("https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0")
        .then(apiResponse => {
            res.json(apiResponse.data)
            console.log("Request made to /restaurants")
        }) // pass data along directly to client
        .catch((err) => {
            // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
            console.log(`Mockaroo didn't work!`)
            //console.error(err) // the server returned an error... probably too many requests... until we pay!
    
            // make some backup fake data
            const backupData = [
              {
                "id":1,
                "name":"Leexo",
                "collection":51,
                "city":"Camden",
                "state":"New Jersey",
                "start":"1:44 AM",
                "end":"11:02 AM",
                "address":"095 Mockingbird Plaza",
                "telephone":"856-666-7448",
                "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
                "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
                "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
                "dishnum":89
              },
            ]
    
            setData(backupData)
            res.json(backupData)
          })
    
})


//when the user signs in 
app.get('/login', (req, res) => {
    axios
        .get("https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0")
        .then(apiResponse => {
            res.status(200).json(
                {"message": "Success",
                "data": apiResponse.data
            })
            console.log("Successfully logged in user!") //should be checked if the password and username don't match or exist; will do in next sprint
        })
        .catch((err) => {
            res.status(400).json({
                "message": "Failure",
                "data": JSON.stringify(req.body)
            })
            console.log("POST request unsuccessful")
//when the user creates an account
app.post('/createaccount', (req, res) => {

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
app.post('/resetpassword', (req, res) => {
    axios
        .get("https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0") //use mockaroo data for sending email
        .then(apiResponse => {
            res.status(200).json({
                "message" : "Success",
                "data": apiResponse.data
            })
            console.log("Successfully sent request to reset password.")
        })
        .catch((err) => {
            res.status(400).json({
                "message": "Failure",
                "data": req.body
            }) //should be the case if can't find email in database; will do in next sprint
            console.log("Failure to receive request to reset password");
            res.json(apiResponse.data)
            console.log("Sent email!")
        })
})

//User wants to contact us
app.post('/contact-us', (req, res) => {
    const name = req.body.first_name + req.body.last_name
    const email = req.body.email //need to verify email
    const message = req.body.message //need to store message somewhere
    res.status(200).json(
        {
        "message": "Success",
        "data": req.body
        })
    console.log("Successfully send message.");
})


//if the user just searches for restaurants without parameters
app.get("/restaurants", (req, res) => {
    axios
        .get("https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0")
        .then(apiResponse => {
            res.status(200).json({
                "message": "Success",
                "data": apiResponse.data
            })
            console.log("Request to fetch restaurants successful.");
        }) // pass data along directly to client
        .catch((err) => {
            // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
            res.status(400).json({
                "message": "Failure"
            })
            console.log("Request to fetch restaurants failed.")
            //console.error(err) // the server returned an error... probably too many requests... until we pay!
    
            // make some backup fake data
            const backupData = [
              {
                "id":1,
                "name":"Leexo",
                "collection":51,
                "city":"Camden",
                "state":"New Jersey",
                "start":"1:44 AM",
                "end":"11:02 AM",
                "address":"095 Mockingbird Plaza",
                "telephone":"856-666-7448",
                "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
                "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
                "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
                "dishnum":89
              },
            ]
            console.log("Backup data initialized.")
    
            setData(backupData)
            res.status(400).json(
                {
                "message": "Sent backup data",
                "data": backupData
            })
            console.log("Sent backup data.");
          })
    
})

//if the user searches for restaurants with location, rating, type, and allergies; Route probably has to be changed
app.post("/restaurants", (req, res) => {

    const location = req.body.location
    const rating = req.body.rating
    const type = req.body.type
    const allergies = req.body.type

    axios
        .get("https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0") //THIS NEEDS TO BE CHANGED to reflect the filtering 
        .then(apiResponse => {
            res.status(200).json({
                "message": "Success",
                "data": req.body
            })
            console.log("Successfully retrieved restaurants.");
        }) // pass data along directly to client
        .catch((err) => {
            // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
            //console.error(err) // the server returned an error... probably too many requests... until we pay!
    
            // make some backup fake data
            console.log("Failed to retrieve restaurants.");
            const backupData = [
              {
                "id":1,
                "name":"Leexo",
                "collection":51,
                "city":"Camden",
                "state":"New Jersey",
                "start":"1:44 AM",
                "end":"11:02 AM",
                "address":"095 Mockingbird Plaza",
                "telephone":"856-666-7448",
                "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
                "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
                "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
                "dishnum":89
              },
            ]
            console.log("Backup data initialized.");

            setData(backupData)
            res.status(400).json({
                "message": "Backup data sent",
                "data": backupData
            })
            console.log("Backup data set.");
          })
        })
    })
})

//Search dishes by restaurant id, called in restaurant display pages
app.get("/dishes/restaurant/:restuarant_id", (req, res) => {
    axios
        .get("https://my.api.mockaroo.com/dishes.json?key=a77dd4e0")
        .then(apiResponse => {
            res.status(200).json({
                "restaurant_id": req.params.restuarant_id,
                "data": apiResponse.data
            })
            console.log("Request to fetch restaurants successful.");
        }) // pass data along directly to client
        .catch((err) => {
            // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
            res.status(400).json({
                "message": "Failure"
            })
            // make some backup fake data
            const backupData = [
              {
                "id":1,
                "name":"Leexo",
                "collection":51,
                "city":"Camden",
                "state":"New Jersey",
                "start":"1:44 AM",
                "end":"11:02 AM",
                "address":"095 Mockingbird Plaza",
                "telephone":"856-666-7448",
                "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
                "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
                "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
                "dishnum":89
              },
            ]
            res.status(400).json(
                {
                "message": "Sent backup data",
                "data": backupData
            })
          })
})

// get dishes by dish id, called in dish profile pages
app.get("/dishes/dish/:dishes_id", (req, res) => {
    axios
        .get("https://my.api.mockaroo.com/dishes.json?key=a77dd4e0")
        .then(apiResponse => {
            res.status(200).json({
                "restaurant_id": req.params.restuarant_id,
                "data": apiResponse.data[0]
            })
            console.log("Request to fetch restaurants successful.");
        }) // pass data along directly to client
        .catch((err) => {
            // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
            res.status(400).json({
                "message": "Failure"
            })
            // make some backup fake data
            const backupData = [
              {
                "id":1,
                "name":"Leexo",
                "collection":51,
                "city":"Camden",
                "state":"New Jersey",
                "start":"1:44 AM",
                "end":"11:02 AM",
                "address":"095 Mockingbird Plaza",
                "telephone":"856-666-7448",
                "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
                "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
                "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
                "dishnum":89
              },
            ]
            res.status(400).json(
                {
                "message": "Sent backup data",
                "data": backupData
            })
          })
})