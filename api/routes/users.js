var express = require('express');
const { response } = require('../app');
var router = express.Router();
var User = require('../models/User');


/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  }catch(err){
    res.json({message: err});
  };
});

/* GET single user by ID. */
router.get('/:id', async (req, res) => {
  try {
  console.log(req.params);
    const user = await User.findById({_id: req.params.id});
    res.json(user);
  } catch (err) {
    res.json({message: err});
  };
});

/* POST new user. */
router.post('/', async (req, res) => {
  const user = new User({ email: req.body.email, password: req.body.password });
  try {
      const savedUser = await user.save();
      res.json(savedUser);
  }catch(err){
      res.json({message: err});
  }
});

/* PATCH current user. */
router.patch('/:id', function(req, res, next) {
  res.send('Updated user info');
});

/* DELETE current user. */
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
