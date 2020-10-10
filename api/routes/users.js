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
    const user = await User.findById({_id: req.params.id});
    res.json(user);
  } catch (err) {
    res.json({message: err});
  };
});

/* POST new user. */
router.post('/', async (req, res) => {
  const user = new User({ email: req.body.email, password: req.body.password, user_name: req.body.user_name });
  try {
      const savedUser = await user.save();
      res.json(savedUser);
  }catch(err){
      res.json({message: err});
  }
});

/* PATCH single user favorites by ID. */
router.post('/:id/favorites', async (req, res) => {

    const user = User.findOne({ _id: req.params.id})
    .then((newUser) => {
      newUser.favorites.push(req.body.favorites);
      newUser.save();
      res.send(newUser);
    })
    .catch((err) => res.json(err));
});

/* PATCH current user. */
router.patch('/:id', async (req, res) => {
  try{
    const updatedUser = await User.updateOne(
      {_id: req.params.id},
      {
        password: req.body.password ? req.body.password : password,
        email: req.body.email ? req.body.email : email,
        user_name: req.body.user_name ? req.body.user_name : user_name
      }
    );
    const user = await User.findById({_id: req.params.id})
    res.json(user);
  }catch (err) {
    console.log(err);
    res.json({message: err});
  };
});

/* DELETE current user. */
router.delete('/:id', async (req, res) => {
  try {
    const removedUser = await User.remove({_id: req.params.id});
    res.json(removedUser);
  }catch(err){
    res.json({message: err});
  }
});

module.exports = router;

/*
Response hash
{
    "_id": "5f819cc2cb4718c0bd185465",
    "email": "colin@me.com",
    "password": "abcde",
    "date": "2020-10-10T11:36:34.958Z",
    "__v": 0
}
*/