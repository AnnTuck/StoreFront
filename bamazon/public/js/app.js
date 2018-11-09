

//*************FUNCTION getOrderInfo*************** */
// retrieves product and quantity ordered when order button is clicked
const getOrderInfo = function (event) {
    event.preventDefault();

    // //Clear order total and low inventory alert
    $('#total-view').empty;
    $('#inventory-view').empty;

    // Grab the product item info from the button clicked
    const prodId = $(this).attr('data-name');
    console.log("prodId", prodId);

    //Grab order quantity from input box
    const qty = parseInt($(this).next('#quantity-input').val());
    console.log("quantity", qty);
    //Clear the contents of the input
    $('#quantity-input').val('');

    //send id and quantity to 
    getProductbyId(prodId, qty);
};



//*****************FUNCTION renderStore**************** */
// Function for displaying product info
const renderStore = function (productList) {

  // Clear the element before appending product info and buttons to i
  // (this is necessary otherwise you will have repeat buttons etc.)
 

  // Loop through the array of products
  for (let i = 0; i < productList.length; i++) {

    //Then dynamicaly generate buttons, input, and product infor each item in products table
    //and append it to a single div element.

    //Order Button
    const newButton = $('<button>');
    // Add a class to order buttons
    newButton.addClass('order-btn');
    // Add a data-attribute to indicate what product was ordered
    newButton.attr('data-name', productList[i].id);
    //Initial button text
    newButton.text("Add to Cart");

    //Select Order Quantity
    const newQuantity = $('<input type="number" id="quantity-input" value = "1" min = "1">');
    newQuantity.addClass('order-qty');

    //Product Name
    const newItemName = $(`<p>${productList[i].product_name}</p>`);
    newItemName.addClass('item-name');

    //Product Price
    const newItemCost = $(`<p>$${productList[i].price}</p>`);
    newItemCost.addClass('item-price');

    //Product Image
    const prodImage = "https://s3.amazonaws.com/roostery-composites/qkprodtile/wyandotte/basicv2/1634231/full-bed-71-1024-1024-l.jpg";
    const newImage = $('<img>').attr("src", `${productList[i].image_url}`);
    newImage.addClass('item-image');

    // Append the product info, buttons, and selectors to the items-view div
    $('#item-view').append('<br>');
    $('#item-view').append('<br>');
    $('#item-view').append('<hr>');
    $('#item-view').append(newImage);
    $('#item-view').append(newItemName);
    $('#item-view').append(newItemCost);
    $('#item-view').append(newButton);
    $('#item-view').append(newQuantity);
  };
};



//***************FUNCTION  getProductsByDepartment***************** */
//Renders department name and calls function to render product into
const getProductsByDepartment = function () {
    
    console.log("getProductsByDepartment");
    

    $('#item-view').empty();
    //Clear order total and low inventory alert
    $('#total-view').empty;
    $('#inventory-view').empty;
  

    

    // Make a GET request to /api/departments/
    $.get('/api/departments')
        .then(function (data) {
            console.log("departments data",data);
            console.log("departments data length", data.length);
            console.log("department id 1", data[0].id);
            console.log("department id 1 products", data[0].Products);
            renderSupervisor(data);
            
            // Pass data.Products to the render function. This is all the Products by each Department
            for (let i=0; i < data.length; i++) {

                const newDeptName = $(`<p>${data[i].department_name}</p>`);
                newDeptName.addClass('dept-name');

                $('#item-view').append('<hr>');
                $('#item-view').append('<br><br><br>');                             
                $('#item-view').append(newDeptName);
                renderStore(data[i].Products);
                
            };
        });
};



//***FUNCTION */
//Display all products by department
const getProductbyId = function (prodId,qty) {
    
    console.log("getProductbyId");

    // Make a GET request to /api/products/Id:
    $.get(`/api/products/${prodId}`)
    .then(function (data) {
    console.log("prodID, data",prodId, data);
    enterOrder(prodId, qty, data);
    });

    
};

//***FUNCTION */
//Order Information
const enterOrder = function(prodId, qty, data) {

    console.log("enterOrder");

    if (qty > data.stock_quantity) {
        console.log("insufficient stock", qty, data.stock_quantity);
        const lowInventory = $(`<p>Insufficient Inventory. Only ${data.stock_quantity} items in stock</p>`);
        $('#inventory-view').append(lowInventory);

    } else {
    data.stock_quantity = data.stock_quantity - qty;
    data.quantity_purchased = data.quantity_purchased + qty;
    console.log("DATA after", data);
    total = qty * data.price;
    const orderTotal = $(`<p>Order total: $${total}</p>`)
    $('#total-view').append(orderTotal);

    
    putOrder(prodId, data);
    
    };

};

//***FUNCTION */
//Enter order into database product table
const putOrder = function (prodId, data) {
    
    console.log("putOrder", prodId, data);

    $.ajax({
        method: 'PUT',
        url: (`/api/products/${prodId}`),        
        data: data
    }).then(function() {
      console.log("PUT");
      });


//????Why doesn't this work?
    // // Make a PUT to /api/products/Id:
    // $.put(`/api/products/${prodId}`)
    // .then(function (data) {
    // console.log("PUT prodID, data",prodId, data);
    
    // });

};

//********************Challenge #2********************************* */

/***FUNCTION */
//Order Information
const addInventory = function(prodId, qty, data) {

    console.log("add Inventory");

           

    console.log("DATA before", data);

    data.stock_quantity = data.stock_quantity + qty;
    
    console.log("DATA after", data);
  
    

    
    putOrder(prodId, data);
    
   
};




//***FUNCTION */
//get product record by id 
const mgrGetProductbyId = function (prodId,qty) {
    
    console.log("getProductbyId");

    // Make a GET request to /api/products/Id:
    $.get(`/api/products/${prodId}`)
    .then(function (data) {
    console.log("prodID, data",prodId, data);
    addInventory(prodId, qty, data);
    });

    
};




//* FUNCTION */
// retrieves product and quantity stock to add when order button is clicked
const getInventoryAdd = function (event) {
    event.preventDefault();

    
    // Grab the product item info from the button clicked
    const prodId = $(this).attr('data-name');
    console.log("prodId", prodId);

    //Grab order quantity from input box
    const qty = parseInt($(this).next('#quantity-input').val());
    console.log("quantity to add", qty);
    //Clear the contents of the input
    $('#quantity-input').val('');

    //send id and quantity to 
    mgrGetProductbyId(prodId, qty);
};



//* FUNCTION *//
// Function for displaying manager's info
const renderManager = function (productList, divTag) {

    // Clear the element before appending product info and buttons to i
    // (this is necessary otherwise you will have repeat buttons etc.)
   
  
    // Loop through the array of products
    for (let i = 0; i < productList.length; i++) {
  
      //Then dynamicaly generate buttons, input, and product infor each item in products table
      //and append it to a single div element.
  
      //Order Button
      const newButton = $('<button>');
      // Add a class to order buttons
      newButton.addClass('add-btn');
      // Add a data-attribute to indicate what product was ordered
      newButton.attr('data-name', productList[i].id);
      //Initial button text
      newButton.text("Add inventory");
  
      //Select Order Quantity
      const newQuantity = $('<input type="number" id="quantity-input" value = "1" min = "1">');
      newQuantity.addClass('order-qty');
  
      //Product Name
      const newItemName = $(`<p>${productList[i].product_name}</p>`);
      newItemName.addClass('item-name');
  
      //Product Price
      const newItemInventory = $(`<p>${productList[i].stock_quantity} items in stock</p>`);
      newItemInventory.addClass('item-price');
  
      //Product Image
      const prodImage = "https://s3.amazonaws.com/roostery-composites/qkprodtile/wyandotte/basicv2/1634231/full-bed-71-1024-1024-l.jpg";
      const newImage = $('<img>').attr("src", `${productList[i].image_url}`);
      newImage.addClass('item-image');
  
      // Append the product info, buttons, and selectors to the items-view div
      $(`#${divTag}`).append('<br>');
      $(`#${divTag}`).append('<br>');
      $(`#${divTag}`).append('<hr>');
      $(`#${divTag}`).append(newImage);
      $(`#${divTag}`).append(newItemName);
      $(`#${divTag}`).append(newItemInventory);
      $(`#${divTag}`).append(newButton);
      $(`#${divTag}`).append(newQuantity);
    };
  };



//***FUNCTION***/
//Display low inventory
const queryLowInv = function () {

    console.log("queryLowInv")
    $.get('/api/lowStock')
    .then(function (data) {
    console.log("Query Low Inventory data", data);
    renderManager(data, "low-inventory");
    });

    
    
};

//*************FUNCTION appUserInput*************** */
// retrieves applicant's input data when submint button is clicked
const newProdInput = function () {
    //Takes in the data from the applicant form and clears form after submit.

    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want

    // event.preventDefault();

    console.log("add Product");


    //Grab the form elements and fill the applicant object
    let newProduct = {
        product_name: $('#prod-name').val().trim(),
        price: $('#price').val().trim(),
        stock_quantity: $('#stock-qty').val().trim(),
        quantity_purchased: 0,
        image_url: $('#image-url').val().trim(),
        DepartmentId: ($('#dept').val()).slice(0,1)
    };

    console.log ("newProduct", newProduct);


    //Clear the input form
        $('#prod-name').val('');
        $('#price').val('');
        $('#stock-qty').val('');
        $('#image-url').val('');
        $('#dept').val('');
        
};


//* FUNCTION *//
// Function for displaying manager's info
const renderSupervisor = function (data) {

    console.log("renderSupervisor");
    console.log(data);
    // Clear the element before appending product info and buttons to i
    // (this is necessary otherwise you will have repeat buttons etc.)
   
  
    // Loop through the array of products
    for (let i = 0; i < data.length; i++) {
        console.log("renderSupervisor data[i].Products", data[i].Products);
        let product_sales = totalSales(data[i].Products);
        let total_profit = product_sales - data[i].over_head_costs 
            
           
        const newLine = $(`<p>${data[i].department_name}  |  $${data[i].over_head_costs}  |  $${product_sales}  |  $${total_profit}</p>`);
        $('#sales').append(newLine);
       
    
    };
  };

const totalSales = function(productList) {
    let sales = 0;

    console.log("totalSales productList",productList);


    for (let i=0; i < productList.length; i++) {
        sales = sales + productList[i].quantity_purchased*productList[i].price
    }
    return sales;
}






//**********************MAIN BODY******************** */
// Adding a click event listener to all elements with a class of 'order-btn'
$('#item-view').on('click', '.order-btn', getOrderInfo);
// Adding a click event listener to all elements with a class of 'add-btn'
$('#low-inventory').on('click', '.add-btn', getInventoryAdd);
// Adding a click event listener to all elements with a class of 'add-btn'
$('#new-product').on('click', '.add-prod-btn', newProdInput);


// Render all products
// newProdInput();
getProductsByDepartment();
queryLowInv();


















