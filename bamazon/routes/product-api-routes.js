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

// GET route for getting all of the articles
app.get('/api/lowStock', function (req, res) {

  //Add an 'include' property to our options in our findAll query
  //Set the value to an array of the models we want to include in a left outer join
  //In this case, just db.Department
  db.Product.findAll({
    where: {
      stock_quantity: {
        $lt: 5
    }},
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
      // include: [db.Product]
    }).then(function (dbProduct) {
       res.json(dbProduct);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // // GET route for getting all of the articles
  // app.get('/api/products/lowStock', function (req, res) {

  //   //Add an 'include' property to our options in our findAll query
  //   //Set the value to an array of the models we want to include in a left outer join
  //   //In this case, just db.Department
  //   db.Product.findAll({
  //     // where: {
  //     //   stock_quantity: 2
  //     // },
  //   }).then(function (dbPost) {
  //     res.json(dbPost);
  //   }).catch(function (error) {
  //     res.json({ error: error });
  //   });
  // });

  // POST route for saving a new product
  app.post('/api/products', function (req, res) {
    db.Product.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // app.put('/api/products/:id', function(req, res) {
  //   db.Product.update(
  //     req.body,
  //     { where: { id: req.params.id } }
  //   ).then(function() {
  //     res.json({ success: true });
  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });


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

  // DELETE route for deleting products
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

//QUERIES----

// const queryLowInv = function () {
// db.sequelize.sync().then(function(){
//   db.Product.findAll({
//     where: {
//       stock_quantity: 2
//     }
//   }).then(function(data){
//     console.log('------------PRINTING DB DATA-----------------');
//     console.log(JSON.stringify(data, null, 2));
//   });

  // db.Reservation.findAll({
  //   where: {
  //     phoneNumber: '444-666-3377'
  //   }
  // }).then(function(data){
  //   console.log('------------PRINTING DB DATA-----------------');
  //   console.log(JSON.stringify(data, null, 2));
  // });

  // db.Reservation.find({
  //   where: {
  //     phoneNumber: '444-666-3377'
  //   }
  // }).then(function(data){
  //   console.log('------------PRINTING DB DATA-----------------');
  //   console.log(JSON.stringify(data, null, 2));
  // });


// });
// };