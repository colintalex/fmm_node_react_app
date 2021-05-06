var express = require('express');
const { response } = require('../app');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  // Validation goes here, correct info
    if (!req.body.password || !req.body.email) return res.status(409).send({error: 'All fields must be completed'});
    // Check for existing user
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user) return res.status(400).send({error: 'User does not exist'});
        //Validate password
        bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).send({error: 'Invalid Credentials'})
            jwt.sign(
                {id: user.id},
                process.env.JWT_SECRET,
                { expiresIn: 3600 }, (err, token) => {
                if(err) throw err;
                res.json({
                    user: {
                    id: user._id,
                    user_name: user.user_name,
                    email: user.email,
                    favorites: user.favorites
                    }, token: token
                })
                }
            )
        })

    })
    .catch((err) => res.status(409).send({error: err}));
});

module.exports = router;