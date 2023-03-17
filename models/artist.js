// Creates the Tattoo model.


// Require mongoose
const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    artistInsta: { type: String, required: true },
    photo: { type: String, required: true },
}); 


// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Artist', artistSchema);