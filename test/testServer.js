const { expect } = require('chai');
const request = require('request');
let url = 'http://localhost:3000/api/cat';
let cat = {
    title: 'cattest',
    subTitle: 'kittyTest',
    path: 'images/nocat.jpg',
    description: 'testingcat'
};
let idToDelete = [];

describe('test GET responce', function () {
    it('testing GET with status code 200', function (done) {
        request.get('http://localhost:3000/api/cat', function (error, response, anotherThing) {
            let responseObj = JSON.parse(anotherThing);
            console.log('error');
            console.log(arguments[0]);
            console.log('anotherThing');
            console.log(arguments[2]);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test GET data object', function () {
    it('testing GET data object with leght >= 1', function (done) {
        request.get('http://localhost:3000/api/cat', function (error, response, anotherThing) {
            let responseObj = JSON.parse(anotherThing);
            console.log('error');
            console.log(arguments[0]);
            console.log('anotherThing');
            console.log(arguments[2]);
            expect(responseObj.data).to.have.lengthOf.at.least(1);
            done();
        });
    });
});


describe('test POST request', function () {
    it('testing POST with status code 201', function (done) {
        request.post({ url: url, form: cat }, function (error, response, anotherThing) {
            let responseObj = JSON.parse(anotherThing);
            console.log('error');
            console.log(arguments[0]);
            console.log('anotherThing');
            console.log(arguments[2]);
            expect(responseObj.statusCode).to.equal(201);
            idToDelete.push(responseObj.data.insertedId);
            done();
        });
    });
});

describe('test POST data is undefined', function () {
    it('testing POST request where is data undefined', function (done) {
        request.post({ url: url, form: cat }, function (error, response, anotherThing) {
            let responseObj = JSON.parse(anotherThing);
            console.log('error');
            console.log(arguments[0]);
            console.log('anotherThing');
            console.log(arguments[2]);
            expect(responseObj.data).to.not.be.an('undefined');
            idToDelete.push(responseObj.data.insertedId);
            done();
        });
    });
});



describe('DELETE after test POST request', function () {
    it('DELETE after test POST status code 202', function (done) {
        request.delete({url:url, form:{$in:JSON.stringify(idToDelete)}}, function (error, response, anotherThing) {
            let responseObj = JSON.parse(anotherThing);
            console.log('error');
            console.log(arguments[0]);
            console.log('anotherThing');
            console.log(arguments[2]);
            expect(responseObj.statusCode).to.equal(202);
            done();
        });
    });
});