const express = require('express');

const app = express();


const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}

// Rout
app.get('/', (req, res) => {
//   res.send(`This is home page`);
  res.render('home.ejs',{
    name: RESTAURANT.name,
    address: RESTAURANT.address,
    phone: RESTAURANT.phone,
    isOpen: RESTAURANT.isOpen}) 
    // RESTAURANT:RESTAURANT

});

// Rout
//Using the locals object, pass the menu array data from server.js to the menu.ejs view.
app.get("/menu",(req,res,)=>{
    res.render('menu.ejs',{
        menu: RESTAURANT.menu,
    }
    )

})


// Using the locals object, pass an array of data called menuItems containing only items that match the req.params category to the category.ejs view. Best practice dictates that this data should be filtered before it is sent to the view. This can be done in the route handler with a for loop or the .filter() method.
app.get('/menu/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  //pass array of data
  const menuItems = RESTAURANT.menu.filter(index =>
     index.category === category);
  res.render('category.ejs', {
     category, menuItems });
});


// Rout (fon Main menu)
// app.get("/menu/mains",(req,res)=>{
//     res.render('menu.ejs',{
//        ,
//     }
//     )



app.listen(3001, ()=> {
    console.log(`Server is running on http://localhost:3001`)
});
