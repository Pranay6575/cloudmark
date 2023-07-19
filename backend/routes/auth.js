const express = require('express')
const router =   express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');


// Create a User using POST "/api/auth"
router.post("/", [
    body('name',"Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password',"Valid password should be more than 5 characters ").isLength({ min: 5 })
], (req, res)=>{
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).jsonp(errors.array());
    } else {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          }).then(user => res.json(user))
          .catch(err=>{console.log(err)
        res.json({error: 'Please enter a unique email', message: err.message})})
    }

} )

module.exports = router;