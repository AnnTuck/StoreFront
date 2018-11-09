// Initial array of stocks
const stocksList = ['CAT', 'DOG', 'HOG', 'FLY'];





//*************FUNCTION displayProdInfo*************** */
// re-renders the HTML to display the appropriate content
const displayProdInfo = function () {

    // Grab the product item info from the button clicked
    const prodId = $(this).attr('data-name');
    console.log("prodId", prodId);

    //Grab order quantity from input box
    const stock = $(this).next('#quantity-input').val();
    console.log("quantity", stock);
    //Clear the contents of the input
    $('#quantity-input').val('');
};

//*****************FUNCTION renderStore**************** */
// Function for displaying product info
const renderStore = function () {

  // Clear the element before appending product info and buttons to i
  // (this is necessary otherwise you will have repeat buttons etc.)
  $('#item-view').empty();

  // Loop through the array of products
  for (let i = 0; i < stocksList.length; i++) {

    //Then dynamicaly generate buttons, input, and product infor each item in products table
    //and append it to a single div element.

    //Order Button
    const newButton = $('<button>');
    // Add a class to order buttons
    newButton.addClass('order-btn');
    // Add a data-attribute to indicate what product was ordered
    newButton.attr('data-name', stocksList[i]);
    //Initial button text
    newButton.text("Add to Cart");

    //Select Order Quantity
    const newQuantity = $('<input type="number" id="quantity-input" value = "1" min = "1">');
    newQuantity.addClass('order-qty');

    //Product Name
    const prodName = "Leonard";
    const newItemName = $(`<p>${prodName}</p>`);
    newItemName.addClass('item-name');

    //Product Price
    const prodCost = "234.56";
    const newItemCost = $(`<p>$${prodCost}</p>`);
    newItemCost.addClass('item-price');

    //Product Image
    const prodImage = "https://s3.amazonaws.com/roostery-composites/qkprodtile/wyandotte/basicv2/1634231/full-bed-71-1024-1024-l.jpg";
    const newImage = $('<img>').attr("src", `${prodImage}`);
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


// Adding a click event listener to all elements with a class of 'order-btn'
$('#item-view').on('click', '.order-btn', displayProdInfo);

// Calling the renderButtons function to display the intial buttons
renderStore();


