const render = function (productList) {
    $('#products').empty();
    const newButton = $('<button>');

    for (let i = 0; i < productList.length; i++) {
        $('#products').append(`<h3>${productList[i].product_name}<h3><button>${'Order'}</button><h6>$${productList[i].price}<h6>`);
        // Adding the button to the order-button div
     
    // };
};

};
// {/* <button id="product-btn">Submit</button>
// <!-- Dynamically Created Buttons  -->
// <div id="order-button"></div>

//  // Adding the button to the buttons-view div
//  $('#order-button').append(newButton); */}

const renderAll = function (productList) {
    

    for (let i = 0; i < productList.length; i++) {
        $('#products').append(`<h3>${productList[i].product_name}<h3><h6>$${productList[i].price}<h6>`);
        $('#order-button').append(`<button>${'Order'}</button>`);
    };
};




const getProducts = function () {
    $.get('/api/products')
        .then(function (data) {
            console.log(data);
            render(data);
        })
};

const postProduct = function (event) {
    event.preventDefault();
    console.log("postProduct");

    // Save the input in an object called 'product'
    const product = {
        product_name: $('#product-name').val().trim(),
        price: $('#product-price').val().trim(),
        stock_quantity: 0,
        quantity_purchased: 0,
        image_url: " ",
        DepartmentId: $('#product-department').val()
    };
    // product_name, price, stock_quantity, quantity_purchased, image_url, createdAt, updatedAt, DepartmentId) VALUES ('Bee canvas print by Ann Tuck', 69.00, 10, 0, 'https://thumbs.imagekind.com/canvas2/blurred/574858dd-fe77-4041-b07e-9cc9506fe18b_16_650/Bee_art.png?v=04102014-1492755580', NOW(), NOW(), 3)
    console.log("product - from user input", product);


    // $.ajax({
    //     method: 'POST',
    //     url: 'api/products',
    //     data: product
    // }).then(function() {
    //   getProducts();
    // });


    // POST the product object to /api/product
    $.post('/api/products', product)
        .then(function (data) {
            console.log("post '/api/products", product);
            // After receiving a response, call getProducts
            getProducts();

            // Blank our inputs after POST
            $('#product-name').val('');
            $('#product-price').val('');
        });

};

const getDepartments = function () {

    // Make a GET request to /api/departments
    $.get('/api/departments')
        .then(function (data) {

            // Append an option with the author id as the value and the name as the text
            for (let i = 0; i < data.length; i++) {
                $('.departments').append(`<option value='${data[i].id}'>${data[i].department_name}</option>`)
            }
        })
};

const getProductsByDepartment = function (event) {
    event.preventDefault();
    console.log("getProductsByDepartment");
    $('#products').empty();

    // Get authorId from the filter-author dropdown
    const departmentId = $('#filter-department').val();
    console.log("departmentId", departmentId);

    // Make a GET request to /api/authors/:id with authorId
    $.get('/api/departments')
        .then(function (data) {
            console.log("departments data",data);
            console.log("departments data length", data.length);
            console.log("department id 1", data[0].id);
            console.log("department id 1 products", data[0].Products);


            // Pass data.Products to the render function. This is all the Products by each Department
            for (let i=0; i < data.length; i++) {
                $('#products').append(`<hr></hr>`);
                $('#products').append(`<br></br>`);
                $('#products').append(`<h2>${data[i].department_name}<h2>`);
                renderAll(data[i].Products);
            };
        });
};

//Display all products by department
const displayAllProducts = function (event) {
    event.preventDefault();
    console.log("displayAllProducts");

    // Make a GET request to /api/departments
    $.get(`/api/departments/${departmentId}`)
    .then(function (data) {
    console.log(data);

    // Pass data.Articles to the render function. This is all the articles by the selected Author
    render(data.Products);
})

    // Get authorId from the filter-author dropdown
    const departmentId = $('#filter-department').val();
    console.log("departmentId", departmentId);

    // Make a GET request to /api/authors/:id with authorId
    $.get(`/api/departments/${departmentId}`)
        .then(function (data) {
            console.log(data);

            // Pass data.Articles to the render function. This is all the articles by the selected Author
            render(data.Products);
        })
};




getProducts();

getDepartments();

$('#product-btn').on('click', postProduct);
$('#filter-btn').on('click', getProductsByDepartment);






//***FUNCTION */
 // Make a GET request to /api/products/
 const getProducts = function(prodId, qty) {
    $.get('/api/products')
    .then(function (data) {
        console.log("products data",data);
        console.log("products data length", data.length);
        console.log("data[0]", data[0]);
        console.log("products id 1", data[0].id);
        console.log("department id 1 stock_quantity", data[0].product_name);
        console.log("department id 1 stock_quantity", data[0].stock_quantity);
        console.log("department id 1 stock_quantity", data[0].quantity_purchased);
        console.log("ProdId, qty",prodId, qty);
   
        //Find product by prodId
        for (let i=0; i < data.length; i++) {
           //  console.log("data[i].id, prodId", data[i].id, prodId)
            if (data[i].id == prodId) {
                let prodIndex = i
                console.log("Product index", prodId);
               //  let data[i].stock_quantity = data[i].stock_quantity - qty;
               console.log("DATA before", data[i]);
               data[i].stock_quantity = data[i].stock_quantity - qty;
               data[i].quantity_purchased = data[i].quantity_purchased + qty;
               console.log("DATA after", data[i]);
               if (qty > data[i].stock_quantity) {
                   console.log("insufficient stock", qty, data[i].stock_quantity);
               };
            };
        };
   
        console.log("DATA", data);
       //  putProduct(data);
       
    });










// $(function () {
    //Takes in the data from the form and sends it out in a POST request

//     const addSurvey = function (event) {
//     //Takes in the data from the form and clears form after submit.

//         // event.preventDefault() prevents the form from trying to submit itself.
//         // We're using a form so that the user can hit enter instead of clicking the button if they want
//         event.preventDefault();
//         console.log("addSurvey");


//         //Grab the form elements and fill the newSurveyEntry object
//         //Fill question array with scores
//         var question = [($('#q1').val()).slice(0,1), ($('#q2').val()).slice(0,1), ($('#q3').val()).slice(0,1), ($('#q4').val()).slice(0,1), ($('#q5').val()).slice(0,1), ($('#q6').val()).slice(0,1), ($('#q7').val()).slice(0,1), ($('#q8').val()).slice(0,1), ($('#q9').val()).slice(0,1), ($('#q10').val()).slice(0,1)];
//         // var question = [($('#q1').val()).slice(0,1), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()];
//         const newSurveyEntry = {
//             name: $('#formName').val().trim(),
//             photo: $('#formPhoto').val().trim(),
//             scores: question
//         };


//         console.log("newSurveyEntry", newSurveyEntry);


//         //Clear the form data when submitting
//         $('#formName').val('');
//         $('#formPhoto').val('');
//         $('#q1').val('');
//         $('#q2').val('');
//         $('#q3').val('');
//         $('#q4').val('');
//         $('#q5').val('');
//         $('#q6').val('');
//         $('#q7').val('');
//         $('#q8').val('');
//         $('#q9').val('');
//         $('#q10').val('');

//         //Call the function that will find the closest match with the existing surveys.    
//         matchSurvey(newSurveyEntry); 
//     };

//     const matchSurvey = function (newSurveyEntry) {
//         //Take the newly entered survey and find the closest match with the existing surveys.

//         console.log("matchSurvey");
//         console.log("newSurveyEntry", newSurveyEntry);

//         //Get the survey entry from employee.js
//         $.ajax({
//             method: 'GET',
//             url: 'api/employees',
//             }).then(function(data){

//                 var diffScore = [];

//                 console.log("Get data", data);                
//                 console.log("data[0]", data[0]); 
//                 console.log("data[0].scores", data[0].scores);  
//                 console.log("newSurveyEntry.scores",newSurveyEntry.scores);

//                 //data[] is the existing surveys, newSurveyEntry is the newest survey entry
//                 for (let j=0; j<data.length; j++) {
//                     let sumDiff = 0;
//                     for (let i=0; i<data[j].scores.length; i++) {
//                     let diff = Math.abs(data[j].scores[i] - newSurveyEntry.scores[i]);
//                     sumDiff = sumDiff + diff;
//                     console.log("diff", i, diff);
//                     };

//                 console.log("sumDiff j",j, sumDiff);
//                 diffScore[j] = sumDiff;
//                 };
//                 console.log ("diffScore", diffScore);

//                 let diffScoreMin = 51;
//                 for (let i=0; i < diffScore.length; i++) {
//                     if (diffScoreMin > diffScore[i]) {
//                         diffScoreMin = diffScore[i];
//                         matchIndex = i;
//                     }
//                 };
//                 console.log("matching index",matchIndex);
//                 console.log("matching name", data[matchIndex].name);
//                 console.log("matching photo", data[matchIndex].photo);





//                //Pass matching name and photo to modal and launch modal 

//                 $('#modalName').text(data[matchIndex].name);

//                 //???Why doesn't this work??
//                 // let modalPhotoHolder = $('<img>').attr("src","https://vignette.wikia.nocookie.net/muppet/images/0/0f/Animal-BlueBackground.jpg/revision/20150814012530");
//                 // $('#modalPhoto').append(modalPhotoHolder);
//                 document.getElementById("modalPhoto").src = data[matchIndex].photo;

//                 $('#exampleModal').modal('toggle');

//                 //Post the new survey data to the Employee list
//                 postNewSurvey(newSurveyEntry);
//             });


//     };



//     const postNewSurvey = function(newSurveyEntry) {
// //Post the new survey entry to employee.js

//         $.ajax({
//             method: 'POST',
//             url: 'api/employees',
//             data: newSurveyEntry
//         });


//     };


//     $('#submitSurvey').on('click', addSurvey);
// });



