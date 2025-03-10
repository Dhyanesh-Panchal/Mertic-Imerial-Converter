const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    test('Convert a valid input', () => {
        chai.request(server)
            .get('/api/convert?input=10L')
            .end((err, res) => {
                // console.log(res)
                assert.equal(res.text, '{"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"}')
            })
    })
    test('Convert an invalid input', () => {
        chai.request(server)
            .get('/api/convert?input=32g')
            .end((err, res) => {
                // console.log(res)
                assert.equal(res.text, "invalid unit")
            })
    })
    test('Convert an invalid number', () => {
        chai.request(server)
            .get('/api/convert?input=3/7.2/4kg')
            .end((err, res) => {
                // console.log(res)
                assert.equal(res.text, "invalid number")
            })
    })
    test('Convert an invalid number AND unit', () => {
        chai.request(server)
            .get('/api/convert?input=3/7.2/4kilomegagram')
            .end((err, res) => {
                // console.log(res)
                assert.equal(res.text, "invalid number and unit")
            })
    })
    test('Convert with no number', () => {
        chai.request(server)
            .get('/api/convert?input=kg')
            .end((err, res) => {
                // console.log(res)
                assert.equal(res.text, '{"initNum":1,"initUnit":"kg","returnNum":2.20462,"returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"}')
            })
    })
});
