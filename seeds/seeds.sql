USE bamazon_db;

INSERT INTO departments (department_name, over_head_costs, createdAt, updatedAt) VALUES ('Housewares', 10.10, NOW(), NOW());
INSERT INTO departments (department_name, over_head_costs, createdAt, updatedAt) VALUES ('Fabric', 30.30, NOW(), NOW());
INSERT INTO departments (department_name, over_head_costs, createdAt, updatedAt) VALUES ('Art', 40.40, NOW(), NOW());



INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Poured Duvet Cover', 179.00, 10, 0, 'https://s3.amazonaws.com/roostery-composites/qkprodtile/wyandotte/basicv2/1634231/full-bed-71-1024-1024-l.jpg', NOW(), NOW(), 1);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Poured Curtain Panel', 130.00, 10, 0, 'https://garden.spoonflower.com/?designs=1634231&formula=plymouth&size=l', NOW(), NOW(), 1);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Poured Round Tablecloth', 89.00, 10, 0, 'https://s3.amazonaws.com/roostery-composites/qkprodtile/malay/basicv2/1634231/77-1024-1024-l.jpg', NOW(), NOW(), 1);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Arrow Flowers Table Runner', 49.00, 10, 0, 'https://s3.amazonaws.com/roostery-composites/qkprodtile/minorca/basicv2/1513823/placemat-77-1024-1024-l.jpg', NOW(), NOW(), 1);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Arrow Flowers Wallpaper', 180.00, 10, 0, 'https://s3.amazonaws.com/roostery-composites/wallcomp/wallpaper/1513823/64-roll-l.jpg', NOW(), NOW(), 1);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Geometric Flowers Wallpaper', 40.00, 10, 0, 'https://s3.amazonaws.com/roostery-composites/qkprodtile/serama/basicv2/578776/34-1024-1024-l.jpg', NOW(), NOW(), 1);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Japanese Floral Duvet Cover', 179.00, 10, 0, 'https://s3.amazonaws.com/roostery-composites/qkprodtile/wyandotte/basicv2/1402152/full-bed-71-1024-1024-l.jpg', NOW(), NOW(), 1);

INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Juniper Berries Fabric', 17.50, 10, 0, 'https://s3.amazonaws.com/roostery-composites/compost/3356075/fabric-preview-fq_0_m.jpg', NOW(), NOW(), 2);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('English Daisies Fabric', 17.50, 10, 0, 'https://s3.amazonaws.com/roostery-composites/compost/275705/fabric-preview-fq_0_m.jpg', NOW(), NOW(), 2);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Japanese Brush Floral Fabric', 17.50, 10, 0, 'https://s3.amazonaws.com/roostery-composites/compost/1402152/fabric-preview-yard_0_m.jpg', NOW(), NOW(), 2);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Nasturtiums Fabric', 17.50, 10, 0, 'https://s3.amazonaws.com/roostery-composites/compost/922441/fabric-preview-fq_0_m.jpg', NOW(), NOW(), 2);

INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Bee canvas print by Ann Tuck', 69.00, 10, 0, 'https://thumbs.imagekind.com/canvas2/blurred/574858dd-fe77-4041-b07e-9cc9506fe18b_16_650/Bee_art.png?v=04102014-1492755580', NOW(), NOW(), 3);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Sheep canvas print by Ann Tuck', 230.00, 10, 0, 'https://thumbs.imagekind.com/canvas2/blurred/2f23a810-3a0c-45cf-ad08-b30ee35cce06_36_650/Sheep_art.png?v=04102014-1492012750', NOW(), NOW(), 3);
INSERT INTO products (product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Blue Tufted Blivet canvas print by Ann Tuck', 69.00, 10, 0, 'https://thumbs.imagekind.com/canvas2/blurred/6d09f306-44cf-4a03-8ad2-c7a96687ec14_11_650/Blue-Tufted-Blivet_art.png?v=04102014-1492677907', NOW(), NOW(), 3);






