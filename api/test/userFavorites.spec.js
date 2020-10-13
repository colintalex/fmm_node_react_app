const mongoose = require("mongoose");
const app = require('../app');
const supertest = require('supertest');
const User = require("../models/User");
const { assert, request, expect } = require("chai");
const { response } = require("../app");
require('dotenv/config');

beforeEach((done) => {
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => done());
});

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	});
});

describe('/USERS', function (){
    it("can POST a favorite to a user", async function() {
        //Takes FMID and stores that under the apps DB id
        const user = await User.create({
            "email": "colintalex@gmail.com",
            "password": "password",
            "user_name": "colonius_rex",
        });

        const marketData = {
            market_fmid: '123456asdh'
        };

        await supertest(app)
            .post(`/users/${user.id}/favorites/${marketData.market_fmid}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((res) => {
                expect(res.body._id).to.equal(user.id)
                expect(res.body.email).to.equal(user.email)
                expect(res.body.password).to.equal(user.password)
                expect(res.body.user_name).to.equal(user.user_name)
                expect(res.body.favorites[0].market_fmid).to.equal(marketData.market_fmid)
            });
    });

    it("can DELETE a favorite from a user", async function() {
        //Takes FMID and stores that under the apps DB id
        const user = await User.create({
            "email": "colintalex@gmail.com",
            "password": "password",
            "user_name": "colonius_rex",
            "favorites": [
                {market_fmid: '123456asdh'},
                {market_fmid: 'asdfgasdg'}
            ]
        });

     

        await supertest(app)
            .delete(`/users/${user.id}/favorites/${user.favorites[0].id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((res) => {
                expect(res.body._id).to.equal(user.id)
                expect(res.body.email).to.equal(user.email)
                expect(res.body.password).to.equal(user.password)
                expect(res.body.user_name).to.equal(user.user_name)
                expect(res.body.favorites.length).to.equal(1)
            });
    });
});