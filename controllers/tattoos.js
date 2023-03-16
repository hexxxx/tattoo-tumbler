// Contains all the routes for any URI starting with tattoos/

/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/tattoos`
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
// Index Route (GET/Read): Will display all tattoos
router.get('/', function (req, res) {
    db.Tattoo.find({})
        .then(tattoos => { // `tattoos` is an array of all the tattoos
            res.render('tattoo-index', { // Render the tattoo-index view
                tattoos: tattoos // Pass the tattoos data to the view
            })
        })
})

// New Route (GET/Read): Will display a form to create a new tattoo
router.get('/new', function (req, res) {
    res.render('new-form');
});

// Create Route (POST/Create): Will create a new tattoo document
router.post('/', function (req, res) {
    db.Tattoo.create(req.body)
        .then(tattoo => res.redirect('/tattoos/' + tattoo._id));
});

// Show Route (GET/Read): Will display an individual tattoo document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Tattoo.findById(req.params.id)
        .then(tattoo => {
            res.render('tattoo-details', {
                tattoo: tattoo
            });
        })
        .catch(() => res.send('404 Error: Page Not Found'));
});

// Edit Route (GET/Read): Will display a form to edit an individual tattoo document
router.get('/:id/edit', function (req, res) {
    db.Tattoo.findById(req.params.id)
        .then(tattoo => {
            res.render('edit-form', {
                tattoo: tattoo
            });
        })
        .catch(() => res.send('404 Error: Page Not Found'));
});

// Update Route (PUT/Update): Will update an individual tattoo document
router.put('/:id', function (req, res) {
    db.Tattoo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(tattoo => res.redirect('/tattoos/' + tattoo._id))
});

// Delete Route (DELETE/Destroy): Will delete an individual tattoo document
router.delete('/:id', function (req, res) {
    db.Tattoo.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/tattoos'))
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
