//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const { assert, expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
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

describe('/POST login', () => {
    it('it should LOGIN into an existing account', (done) => {
        let data = {
            email: "test@gmail.com",
            password: "test"
        }
      chai.request("http://localhost:3000")
          .post('/login')
          .send(data)
          .end((error, res) => {
            assert(200, res.status);
            done()
          }
          )
    });
});

describe('/POST /resetpassword', () => {
    it('it should RESET password', (done) => {
        let data = {
            email: "test@gmail.com"
        }
      chai.request("http://localhost:3000")
          .post('/resetpassword')
          .send(data)
          .end((error, res) => {
            assert(200, res.status);
            done()
          }
          )
    });
});

describe('/POST contactus', () => {
    it('contact us form', (done) => {
        let data = {
            first_name: "The Lord of the Rings",
            last_name: "J.R.R. Tolkien",
            email: "test@gmail.com",
            message: "help me."
        }
      chai.request("http://localhost:3000")
          .post('/contactus')
          .send(data)
          .end((error, res) => {
            assert(200, res.status);
            done()
          }
          )
    });
});

describe('/POST findrestaurants', () => {
    it('find restuarants form', (done) => {
        let data = {
            location: "The Lord of the Rings",
            rating: 1,
            type: "something good",
            allergies: "help me."
        }
      chai.request("http://localhost:3000")
          .post('/contactus')
          .send(data)
          .end((error, res) => {
            assert(200, res.status);
            done()
          }
          )
    });
});
