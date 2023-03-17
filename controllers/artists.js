// Contains all the routes for any URI starting with artists/

/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/artists`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express');
// Router allows us to handle routing outside of server.js
const router = express.Router();

/* Require the db connection and models
--------------------------------------------------------------- */
const db = require('../models'); // Require the db connection and models. `../` means go up one directory

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all artists
router.get('/', function (req, res) {
    db.Artist.find({})
        .then(artists => { // `artists` is an array of all the artists
            res.render('artist-index', { // Render the artist-index view
                artists: artists // Pass the artists data to the view
            })
        })
})

// // New Route (GET/Read): Will display a form to create a new artist
// router.get('/new', function (req, res) {
//     res.render('new-form');
// });

// // Create Route (POST/Create): Will create a new artist document
// router.post('/', function (req, res) {
//     db.Artist.create(req.body)
//         .then(artist => res.redirect('/artists/' + artist._id));
// });

// // Show Route (GET/Read): Will display an individual artist document
// // using the URL parameter (which is the document _id)
// router.get('/:id', function (req, res) {
//     db.Artist.findById(req.params.id)
//         .then(artist => {
//             res.render('artist-details', {
//                 artist: artist
//             });
//         })
//         .catch(() => res.send('404 Error: Page Not Found'));
// });

// // Edit Route (GET/Read): Will display a form to edit an individual artist document
// router.get('/:id/edit', function (req, res) {
//     db.Artist.findById(req.params.id)
//         .then(artist => {
//             console.log(artist);
//             res.render('edit-form', {
//                 artist: artist
//             });
//         })
//         .catch(() => res.send('404 Error: Page Not Found'));
// });

// // Update Route (PUT/Update): Will update an individual artist document
// router.put('/:id', function (req, res) {
//     db.Artist.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     )
//         .then(artist => res.redirect('/artists/' + artist._id))
// });

// // Delete Route (DELETE/Destroy): Will delete an individual artist document
// router.delete('/:id', function (req, res) {
//     db.Artist.findByIdAndDelete(req.params.id)
//         .then(() => res.redirect('/artists'))
// });

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
