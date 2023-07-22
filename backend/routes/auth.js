const express = require('express')
const router =   express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');


// Create a User using POST "/api/auth/createuser"
router.post("/", [
    body('name',"Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password',"Valid password should be more than 5 characters ").isLength({ min: 5 })
], async (req, res)=>{
  // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).json({errors : errors.array() });
    } else {
      // Check wheather the user with same email exists already
      let user = await User.findOne({email: req.body.email});
      console.log(user);
      if(user){ 
        return res.status(400).json({errors: "Sorry with this email already exists" });
      }
  user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          })
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)
        // res.json({error: 'Please enter a unique email', message: err.message})})
        res.json({"Okay": "ok"})
    }

} )

module.exports = router;