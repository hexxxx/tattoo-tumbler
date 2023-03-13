// Creates the Tattoo model.

// Require mongoose
const mongoose = require('mongoose');

const tattooSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    artistInsta: { type: String },
    image: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    isFeatured: { type: Boolean, required: true },
    dateAdded: { type: Date, default: Date.now }
}); 


// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Tattoo', tattooSchema);