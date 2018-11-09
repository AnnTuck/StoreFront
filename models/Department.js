//Model for the mySQL Department database
//Defines the structure (tables) of the database
//Department is a parent of Product

module.exports = function(sequelize, DataTypes) {
    const Department = sequelize.define('Department', {

        //Define fields in Department model
        //department_id is defined automatically as id and will be used as a foreign key for Products.
        department_name: DataTypes.STRING,
        over_head_costs: DataTypes.FLOAT
    });

        Department.associate = function(models) {
            //Associate Department with Products
            Department.hasMany(models.Product);
        };
    
        return Department;
};