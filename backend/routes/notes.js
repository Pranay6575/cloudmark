const express = require('express')
const router =   express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require('../models/Notes');

// ROUTE-1 Get all notes using GET "/api/notes/fetchAllnotes"
router.get("/fetchAllnotes", fetchuser, async (req, res) =>{
    try{
        const notes = await Notes.find({user: req.user.id});
        res.json(notes);
    }catch(error){
        res.status(500).send("Error has occured");
    }
})

module.exports = router;