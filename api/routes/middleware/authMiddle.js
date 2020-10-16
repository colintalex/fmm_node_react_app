const jwt = require('jsonwebtoken');
const { model } = require('../../models/User');
require('dotenv/config');


function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) res.status(401).send({error: 'No token, authorization denied'})
    try {
        //Check for token

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Add user from payload
        req.user = decoded
    next();
    }catch(err){
        res.status(400).send({error: 'Token is not valid', err: err})
    }
}

module.exports = auth;