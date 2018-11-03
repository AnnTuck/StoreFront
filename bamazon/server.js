//server.js
//Starting point for Node/Express server.


//Dependencies
const express = require('express');

//Sets up the Express app
const app = express();

//Specifies the port (Heroku or local)
const PORT = process.env.PORT || 8080;

//Require our models for syncing
const db = require('./models');

//Sets up middleware for Express app to handle data parsing
    //Parse application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true}));
    //Parse application/json
    app.use(express.json());
    //Our public folder is the interface with the public.
    app.use(express.static('public'));

//Routes
    //Server to database?
    require('./routes/api-routes.js')(app);
    //Server to client html pages.
    require('./routes/html-routes.js')(app);    

//Sync our sequelize models then start our Express app, listen to PORT
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('App is listening on PORT' + PORT);
    });
});