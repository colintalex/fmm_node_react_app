var express = require('express');
const { response } = require('../app');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/authMiddle')

//NOTE -----Learning about putting favorite routes into different file currently


/* GET users listing. */
router.get('/', auth, (req, res) => {
  User.find()
  .then((users) => {
    res.json(users)})
  .catch((err) => {
    res.json({message: err})
  });
});

/* GET single user by ID. */
router.get('/:id', auth, (req, res, next) => {
  User.findById({_id: req.params.id})
  .then((user) => {
    res.json(user)})
  .catch ((err) => {
    return next(err)
  });
});

/* POST new user. */
// NOTE - Verify email and password encryption still needed
router.post('/register', (req, res) => {
  // Validation goes here, correct info
  if (!req.body.password || !req.body.password2 || !req.body.user_name || !req.body.email) return res.status(409).send({error: 'All fields must be completed'})
  if (req.body.password != req.body.password2) return res.status(409).send({error: 'Passwords do not match'})
  // Check for existing user
  User.findOne({email: req.body.email})
  .then(user => {
    if(user) return res.status(409).send({error: 'User already exists'});
    const newUser = new User({ email: req.body.email, password: req.body.password, user_name: req.body.user_name });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
        .then((savedUser) => {
          jwt.sign(
            {id: savedUser.id},
            process.env.JWT_SECRET,
            { expiresIn: 3600 }, (err, token) => {
              if(err) throw err;
              res.json({
                user: {
                  user_name: savedUser.user_name,
                  email: savedUser.email,
                  favorites: savedUser.favorites
                }, token: token
              })

            }
          )
        })
      });
    })
  })
  .catch((err) => res.status(409).send((err)))
});

/* POST New single favorite/s to user. */
// NOTE----- Need to verify FMID somehow, so we don't save random numbers that don't associate
router.post('/:id/favorites/:market_fmid', auth, (req, res) => {
    const user = User.findOne({ _id: req.params.id})
    .then((newUser) => {
      newUser.favorites.push({market_fmid: req.params.market_fmid});
      newUser.save();
      res.send(newUser);
    })
    .catch((err) => res.json(err));
});

/* PATCH Update current user attributes. */
router.patch('/:id', auth, (req, res) => {
    User.findById({_id: req.params.id})
    .then((newUser) => {
      newUser.password = req.body.password ? req.body.password : newUser.password;
      newUser.email = req.body.email ? req.body.email : newUser.email;
      newUser.user_name = req.body.user_name ? req.body.user_name : newUser.user_name;
      newUser.save()
      res.json(newUser)
    })
    .catch((err) => {
      console.log(err);
      res.json({message: err});
    });
});

/* DELETE current user. */
router.delete('/:id', auth, (req, res) => {
    User.remove({_id: req.params.id})
    .then(() => res.json({confirmation: 'Successfully Deleted User'}))
    .catch((err) => res.json({message: err}))
  }
);

/* Delete favorite from current user */
router.delete('/:id/favorites/:fav_id', auth, (req, res) => {
    User.findOne({_id: req.params.id})
    .then((user) => {
      user.favorites.remove({_id: req.params.fav_id})
      user.save()
      res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
});

module.exports = router;