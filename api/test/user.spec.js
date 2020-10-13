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


it("/USERS endpoint", async function() {
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