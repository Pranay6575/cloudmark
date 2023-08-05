const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");

// ROUTE-1 Get all notes using GET "/api/notes/fetchAllnotes"  Login Required
router.get("/fetchAllnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error has occured");
  }
});

// ROUTE-2 Add new note using POST "/api/notes/addnote" Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters ").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors then return, bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
        console.log(error.message);
      res.status(500).send("Error has occured");
    }
  }
);


// ROUTE-3 Update an existing notes using PUT"/api/notes/fetchAllnotes"  Login Required
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
const{title, description, tag} = req.body;
     const newNote = {};
     if(title){newNote.title = title};
     if(description){newNote.description = description};
     if(tag){newNote.tag = tag};

      });

module.exports = router;
