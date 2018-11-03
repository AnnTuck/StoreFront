//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.

module.exports = function(connection, Sequelize) {
    var Product = connection.define('Product', {

        //Define field names in table Product
        product_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        stock_quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        image_url: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }

    });

    
Product.associate = function(models) {
    //Product is a child of Department, the tables are connected by id (Department id)
    Product.belongsTo(models.Department, {
        foreignKey: {
            allowNull: false
        },
        //Commented out for now.
        //Will delete all products in a department if the department is deleted.
        //onDelete: 'cascade'
    });
};
    return Product;
};