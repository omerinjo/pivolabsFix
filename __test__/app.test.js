//const { protect } = require('../contollers/users');
//const protect = require('../routes/users');
const app = require('../server');

const request = require('supertest');


describe("Firts test ", () => {
    test('Work', (done) => {
        var response = request(app)
            .get('/api/test')
        done()
    })
})



describe("Get all users", () => {
    test("get all users ", (done) => {
        request(app)
            .get('/api/mostliked/0/100')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})
