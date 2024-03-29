/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');
const tattoosCtrl = require('./controllers/tattoos');
const artistsCtrl = require('./controllers/artists');

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true })); // Parse form data


/* ############################################################### 
   ###################### MOUNT ROUTES ###########################
/* ############################################################### */

// Index Route (GET/Read): Will display all tattoos
app.get('/', function (req, res) {
    db.Tattoo.find({})
        /* 
        Only show featured tattoos
        -------------------------
        db.tattoo.find({ isFeatured: true }) 
        */
        .then(tattoos => { // `tattoos` is an array of all the tattoos
            res.render('home', { // Render the tattoo-index view
                tattoos: tattoos // Pass the tattoos data to the view
            })
        })
})

// NOTE - THIS WILL NOT WORK UNTIL YOU ALSO CONFIGURE INDEX.JS IN YOUR MODEL
// GET request to /seed to seed the database
app.get('/seed', function (req, res) {
    db.Tattoo.deleteMany({})
        .then(removedTattoos => {
            console.log('Removed ${removedTattoos.length} tattoos')

            db.Tattoo.insertMany(db.seedTattoos) // Insert the seed data
                .then(addedTattoos => { // `addedTattoos` is an array of all the tattoos that were added
                    console.log('Added ${addedTattoos.length} tattoos') 
                    res.json(addedTattoos) // Send the array of added tattoos as JSON
                })
        })
})

app.get('/seedArtists', function (req, res) {
    db.Artist.deleteMany({})
        .then(removedArtists => {
            console.log('Removed ${removedArtists.length} artists')

            db.Artist.insertMany(db.seedArtists) // Insert the seed data
                .then(addedArtists => { // `addedArtists` is an array of all the artists that were added
                    console.log('Added ${addedArtists.length} artists')
                    res.json(addedArtists) // Send the array of added artists as JSON
                })
        })
})

// Route for tattoo details
app.get('/tattoo/:id', function (req, res) {
    db.Tattoo.findById(req.params.id)
        .then(tattoo => {
            res.render('tattoo-details', {
                tattoos: tattoo
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})

// This tells our app to look at the `controllers/tattoos.js` file 
// to handle all routes that begin with `localhost:3000/tattoos` 
app.use('/tattoos', tattoosCtrl)

// This tells our app to look at the `controllers/artists.js` file
// to handle all routes that begin with `localhost:3000/artists`
app.use('/artists', artistsCtrl)

// The catch-all route
app.get('*', function (req, res) {
    res.send('404 Error: Page Not Found')
})

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
})