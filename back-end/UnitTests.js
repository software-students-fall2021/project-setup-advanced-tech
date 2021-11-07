process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('/GET restaurants', () => {
    it('it should GET all the restaurants', (done) => {
      chai.request("http://localhost:3000")
          .get('/restaurants')
          .end((error, res) => {
            assert(200, res.status);
            done()
          }
          )
    });
});

describe('/POST createaccount', () => {
    it('it should CREATE a new account', (done) => {
        let data = {
            first_name: "The Lord of the Rings",
            last_name: "J.R.R. Tolkien",
            email: "test@gmail.com",
            first_pass: "test",
            second_pass: "test",
            allergies: "malt extract"
        }
      chai.request("http://localhost:3000")
          .post('/createaccount')
          .send(data)
          .end((error, res) => {
            assert(200, res.status);
            done()
          }
          )
    });
});