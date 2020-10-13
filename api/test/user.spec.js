// process.env.NODE_ENV = 'test';
const mongoose = require("mongoose");
const app = require('../app');
const supertest = require('supertest');
const User = require("../models/User");
const { assert, request, expect } = require("chai");
const { response } = require("../app");
require('dotenv/config');



beforeEach((done) => {
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => done());
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})

describe('/USERS', function (){
    it("can GET all users", async function() {
        const user1 = await User.create({
        "email": "colintalex@gmail.com",
        "password": "password",
        "user_name": "colonius_rex",
        });
        const user2 = await User.create({
        "email": "colintalex@gmail.com1",
        "password": "password1",
        "user_name": "colonius_rex1"
        });

        await supertest(app)
            .get('/users')
            .expect(200)
            .expect('Content-Type', /json/)
            .then((res) => {
                expect(res.body[0]._id).to.equal(user1.id)
                expect(res.body[0].email).to.equal(user1.email)
                expect(res.body[0].password).to.equal(user1.password)
                expect(res.body[0].user_name).to.equal(user1.user_name)
                expect(res.body[0].favorites).to.be.a('array')
                expect(res.body[1]._id).to.equal(user2.id)
                expect(res.body[1].email).to.equal(user2.email)
                expect(res.body[1].password).to.equal(user2.password)
                expect(res.body[1].user_name).to.equal(user2.user_name)
            })
    });

    it("can GET a single user", async function() {
        const user1 = await User.create({
        "email": "colintalex@gmail.com",
        "password": "password",
        "user_name": "colonius_rex",
        });
        const user2 = await User.create({
        "email": "colintalex@gmail.com1",
        "password": "password1",
        "user_name": "colonius_rex1"
        });

        await supertest(app)
            .get(`/users/${user1.id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((res) => {
                expect(res.body._id).to.equal(user1.id)
                expect(res.body.email).to.equal(user1.email)
                expect(res.body.password).to.equal(user1.password)
                expect(res.body.user_name).to.equal(user1.user_name)
                expect(res.body.favorites).to.be.a('array')
            })
    });

    it('can POST a new user', async function() {
        const userData = {
        "email": "colintalex@gmail.com",
        "password": "password",
        "user_name": "colonius_rex",
        };

        await supertest(app)
        .post('/users')
        .send(userData)
        .expect(200)
        .expect('Content-Type', /json/)
        .then((res) => {
            expect(res.body).to.have.property('_id')
            expect(res.body.email).to.equal(userData.email)
            expect(res.body.password).to.equal(userData.password)
            expect(res.body.user_name).to.equal(userData.user_name)
            expect(res.body.favorites).to.be.a('array')
        })

    })
})