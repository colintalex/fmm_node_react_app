var express = require('express');
const { response } = require('../app');
var router = express.Router();
var User = require('../models/User');


/* GET users listing. */
router.get('/', (req, res) => {
  User.find()
  .then((users) => {
    res.json(users)})
  .catch((err) => {
    res.json({message: err})
  });
});

/* GET single user by ID. */
router.get('/:id', (req, res) => {
  User.findById({_id: req.params.id})
  .then((user) => {
    res.json(user)})
  .catch ((err) => {
    res.json({message: err})
  });
});

/* POST new user. */
router.post('/', (req, res) => {
  const user = new User({ email: req.body.email, password: req.body.password, user_name: req.body.user_name });
  user.save()
  .then((savedUser) => {
    res.json(savedUser)
  })
  .catch((err) => {
      res.json({message: err})
  });
});

/* PATCH single user favorites by ID. */
// Need to verify FMID somehow, so we don't save random numbers that don't associate
router.post('/:id/favorites', (req, res) => {
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
  // Refactor candidate, move into seperate async func, call with .then and .catch
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
router.delete('/:id/favorites', (req, res) => {
    User.remove({_id: req.params.id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
  }
);

module.exports = router;

/* Delete favorite from current user */
//Pass in FMID through params


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