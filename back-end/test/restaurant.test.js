process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
//let should = chai.should();

const app = require('../app')
chai.use(chaiHttp);

//for post requests, have dummy data
const assert = require("assert");
const { expect } = require('chai');
const { response } = require('express');
//const { default: Createaccount } = require('../../front-end/frontend/src/createaccount/Createaccount');
//apiResponse is just a name; doesn't have to be that name
let mockUser = {
    first_name: "Foo",
    last_name: "Bar", 
    email: "foo.bar@yahoo.com",
    first_pass: "1234abcd", 
    second_pass: "1234abcd", 
    allergies: "nuts"

}

describe("getRestaurants()", function(){
    it("Return the restaurant data in JSON format", ()=> {
        chai.request(app).get('/restaurants').then(apiResponse => {
            //ensure every field is not undefined
            expect(response.status).to.equal(200)
                
            })
        })
    it("Ensure that the fields are populated correctly", () => {
        chai.request(app).get('/restaurants').then(res => {
            expect(response.body[0].id).to.be.a('int')
            expect(response.body[0].name).to.be.a('string')
            expect(response.body[0].collection).to.be.a('int')
            expect(response.body[0].city).to.be.a('string')
            expect(response.body[0].state).to.be.a('string')
            expect(response.body[0].start).to.be.a('string')
            expect(response.body[0].end).to.be.a('string')
            expect(response.body[0].address).to.be.a('string')
            expect(response.body[0].telephone).to.be.a('string')
            expect(response.body[0].image1).to.be.a('string')
            expect(response.body[0].image2).to.be.a('string')
            expect(response.body[0].dishnum).to.be.a('int')
            })
        })
        
})

//for post request, make dummy data, send from front end to backend the data to post request, and check if response.allergies = allergies just sent
//data coming from unit test; create this fake identity (in unit test) with samee 4 variables; then make post reequest with those same 4 variables; for now, make sure allergies are same
describe("createAccount()", function() {
    it("ensure status is 200", () => {
        chai.request(app).post('/createaccount').then(res => {
            expect(response.status).to.equal(200)
        })
    })

    it("Ensure the user has the same fields", () => {
        chai.request(app).post('/createaccount').send(mockUser).then(res => {
            expect(response.body).to.contain.keys('name', 'email', 'password', 'allergies')
            //checking if they are equal
            expect(response.body.name).to.equal(mockUser.first_name + mockUser.last_name)
            expect(response.body.email).to.equal(mockUser.email)
            expect(response.body.password).to.equal(mockUser.first_pass)
            expect(response.body.allergies).to.equal(mockUser.allergies)

            //now, we have to delete the object from the database, but I don't know how to do that (for the later sprint)
        })
    })
})
