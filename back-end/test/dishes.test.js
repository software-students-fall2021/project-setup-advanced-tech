process.env.NODE_ENV = 'test';

const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')

describe('Unit testing the /dishes/dish route', function() {

  it('Should return [id, name, ingredients, collections, image, restaurant_id]', () => {
    request(app)
        .get('/dishes/restaurant/3', {
            params: {},
        })
        .then((response) => {
            // automatic statusCode must be 200 <-- success
            expect(response.status).to.equal(200)
            //check whether restaurant_id is successfully passed
            expect(response.text.restaurant_id).to.equal(3)
            // parse returned JSON string
            const parsed = JSON.parse(response.text.data)
            // initialize property array
            const expectedProperty = ["id", "name", "ingredients", "collections", "image", "restaurant_id"]
            // assertions
            expect(parsed).to.be.a('Array')
            parsed.forEach((object) => {
                expectedProperty.forEach((element) => {
                    expect(object).to.have.property(element)
                })
            })
        })
})

});

describe('Unit testing the /dishes/restuarant route', function() {

  it('Should return [id, name, ingredients, collections, image, restaurant_id]', () => {
    request(app)
        .get('/dishes/dish/3', {
            params: {},
        })
        .then((response) => {
            // automatic statusCode must be 200 <-- success
            expect(response.status).to.equal(200)
            //check whether restaurant_id is successfully passed
            expect(response.text.restaurant_id).to.equal(3)
            // parse returned JSON string
            const parsed = JSON.parse(response.text.data)
            // initialize property array
            const expectedProperty = ["id", "name", "ingredients", "collections", "image", "restaurant_id"]
            // assertions
            expectedProperty.forEach((element) => {
                    expect(parsed).to.have.property(element)
            })
        })
})

});

//chai.use(chaiHttp);