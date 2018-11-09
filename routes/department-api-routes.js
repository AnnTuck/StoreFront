//department-api-routes.js

//Require models
const db = require('../models');

module.exports = function (app) {

    //GET route for retrieving all departments
    app.get('/api/departments', function (req, res) {

        //Add an 'include' property to our options in our findAll query
        //Set the value to an array of the models we want to include in a left outer join
        //In this case, just db.Product
        db.Department.findAll({
            include: [db.Product]
        }).then(function (dbDepartment) {
            res.json(dbDepartment);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    //GET route for retreiving a single specified department
    app.get('/api/departments/:id', function(req, res) {

    //Add an 'include' property to our options in our findOne query
    //Set the value to an array of the models we want to include in a left outer join
    //In this case, just db.Product
    db.Department.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Product]
    }).then(function (dbDepartment) {
        res.json(dbDepartment);
    }).catch(function (error) {
        res.json({ error: error });
    });

    });

    //POST route for adding new departments
    app.post('/api/departments', function (req, res) {
        db.Department.create(req.body).then(function (dbDepartment) {
            res.json(dbDepartment);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    // PUT route for updating departments
    app.put('/api/departments/:id', function (req, res) {
        db.Department.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbDepartment) {
                res.json(dbDepartment);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });

    // DELETE route for deleting departments
    app.delete('/api/departments/:id', function (req, res) {
        db.Department.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbDepartment) {
            res.json(dbDepartment);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

};
