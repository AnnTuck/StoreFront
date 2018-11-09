//server.js
//Starting point for Node/Express server.

//Dependencies
const express = require('express');
const path = require('path');
//Specifies the port (Heroku or local)
const PORT = process.env.PORT || 8080;

//Require our models for syncing
const db = require('./models');

//Sets up the Express app
const app = express();

//Sets up middleware for Express app to handle data parsing
    //Parse application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));
    //Parse application/json
    app.use(express.json());
    //Our public folder is the interface with the public.
    app.use(express.static(path.join(__dirname,'./public')));

//Routes
    
    require('./routes/department-api-routes.js')(app);
    require('./routes/product-api-routes.js')(app);
    require('./routes/html-routes.js')(app);


    // const queryLowInv = function () {

    //     const db = require('./models');
    
    //     db.sequelize.sync().then(function(){
    //       db.Product.findAll({
    //         where: {
    //           stock_quantity: 2
    //         }
    //       }).then(function(data){
    //         console.log('------------PRINTING DB DATA-----------------');
    //         console.log(JSON.stringify(data, null, 2));
    //       });
    //     });
    // };


//Sync our sequelize models then start our Express app, listen to PORT
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        // queryLowInv();
        console.log('App is listening on PORT' + PORT);
    });
});