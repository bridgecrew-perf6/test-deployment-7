const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      maxlength: 300,
      trim: true // Ensures any spaces at the beginning and ending of a string should be removed
    },
    // Missing creator and picture
    creator: {
      // Telling mongoose an object id of another document will be stored in this property
      type: mongoose.Types.ObjectId,
      required: true,
      // Tell mongoose that this refers to the id of a document
      // in the users collection,
      // the collection that corresponds to the User model
      ref: 'User'
    },

    picture: {
      type: String
    }
  },
  { timestamps: true }
);

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
