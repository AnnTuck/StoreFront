//html-routes.js
//Connects server to client via HTML

//Dependencies
const path = require('path');

//Routing
module.export = function(app) {

//HTML GET requests - user is shown HTML pages when they 'visit' a page
    //If no matching routes is found default to index.html
    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, '..public/index.html'));
    });

};
