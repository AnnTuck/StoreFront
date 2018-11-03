//product-api-routes.js

// Require our models
const db = require('../models');


// Routes

module.exports = function (app) {

  // GET route for getting all of the articles
  app.get('/api/products', function (req, res) {

    //Add an 'include' property to our options in our findAll query
    //Set the value to an array of the models we want to include in a left outer join
    //In this case, just db.Department
    db.Product.findAll({
      include: [db.Department]
    }).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single product
  app.get('/api/products/:id', function (req, res) {
    //Add an 'include' property to our options in our findOne query
    //Set the value to an array of the models we want to include in a left outer join
    //In this case, just db.Department
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Product]
    }).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // POST route for saving a new product
  app.post('/api/products', function (req, res) {
    db.Product.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating products
  app.put('/api/products/:id', function (req, res) {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      }).catch(function (error) {
        res.json({ error: error });
      });
  });

  // DELETE route for deleting articles
  app.delete('/api/products/:id', function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

};
