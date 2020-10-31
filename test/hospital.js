let mongoose = require("mongoose");
let Patient = require("../models/patient");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('API Test', () => {
    // beforeEach((done) => {
    //     Patient.remove({}, (err) => { 
    //        done();           
    //     });        
    // });

    describe('POST /v1/patients/register', () => {
        it('it should not POST a patient without required feilds', (done) => {
            let patient = {
                name: "muhsin",
                address: "vengara, malappuram" 
            }
              chai.request(server)
              .post('/v1/patients/register')
              .send(patient)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.pages.should.have.property('kind').eql('required');
                done();
              });
        });
        
        it('it should register new patient', (done) => {
            let patient = {
                name: "muhsin",
                address: "vengara, malappuram",
                mobile: 9656052017
            }
              chai.request(server)
              .post('/v1/patients/register')
              .send(patient)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('New Patient Registered');
                done();
              });
        });
    });
});