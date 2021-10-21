const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPets` array in User.js
const petSchema = new Schema({
  // saved pet id from API
  petId: {
    type: String,
    required: true,
  },
  name: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },

  breed: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = petSchema;
