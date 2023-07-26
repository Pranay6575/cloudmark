const mongoose = require('mongoose');

const NotesSchema = new Schema({
    Topic:{
        type: String,
        required: true
    },
    points:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: 'General'
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('notes', NotesSchema)