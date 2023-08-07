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
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Data Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized Entry");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server issue");
  }
});

// ROUTE-4 Delete an existing notes using DELETE"/api/notes/deletenote"  Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note and delete it.
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Data Not Found");
    }

    // Allow deletetion only if user owns this note.
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized Entry");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note deleted successfully", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server issue");
  }
});

module.exports = router;
