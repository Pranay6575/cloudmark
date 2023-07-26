const express = require('express')
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_secret = 'Thisisjwttoken@thing';
// Create a User using POST "/api/auth/createuser"
router.post("/createuser", [
  body('name', "Enter a valid Name").isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('password', "Valid password should be more than 5 characters ").isLength({ min: 5 })
], async (req, res) => {
  // If there are errors , return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    // Check wheather the user with same email exists already
    try {

      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ errors: "Sorry with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Created new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_secret);

      res.json({ authToken })

      // res.json(user)
    }
    catch (err) {
      res.status(500).send('Error has occured')
    }
  }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Authenticate a User using POST "/api/auth/login", no login req.
router.post('/login', [
  body('email', "Enter a valid Email").isEmail(),
  body('password', "Password shouldn't be blank ").exists()
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  else {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({email})
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials !" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password)
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct credentials !" })
      }
      const data = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, JWT_secret);
      res.json({ authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Internal sever error occur" })
    }
  }

})
module.exports = router;