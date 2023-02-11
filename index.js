/*
======================================
; Title: index.js 
; Author: Chris Gorham
; Date: 28 Jan 2023
; Description: This code sets up the Pets-R-Us site views, apps, and renders
; Sources Used: N/A
;=====================================
*/

"use-strict";

// import
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Customer = require('./models/customer');

// express app variable
const app = express();

// mongoose connection address
const CONN = 'mongodb+srv://web340_admin:ChrisDB2023asbf@bellevueuniversity.up6klva.mongodb.net/web340DB';

// displays connection success or error messages
mongoose.connect(CONN).then(() => {
  console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
  console.log('MongoDB Error: ' + err.message);
})

//set views
app.set("views", path.join(__dirname, "views"));

// Tells Express to use ejs as the view engine
app.set("view engine", "ejs");

// set static files, folder: public, has images and stylesheets
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // added during week 6 assignment
app.use(express.json()); // added during week 6 assignment
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/site", express.static(path.join(__dirname, "public/stylesheets")));

// holds server port value
const PORT = process.env.PORT || 3000;

// renders all the different pages
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us',
        pageTitle: 'Welcome to Pets-R-Us, the #1 pet store on the Eastern Shore'
    });
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
      title: "Pets-R-Us: Grooming",
      pageTitle: "Pets-R-Us: Grooming Services",
    });
  });
  
  app.get('/boarding', (req, res) => {
    res.render('boarding', {
      title: "Pets-R-Us: Boarding",
      pageTitle: "Pets-R-Us: Boarding",
    });
  });
  
  app.get('/training', (req, res) => {
    res.render('training', {
      title: "Pets-R-Us: Training",
      pageTitle: "Pets-R-Us: Training",
    });
  });
  
  app.get('/register', (req, res) => {
    res.render('register', {
      title: "Pets-R-Us: Register",
      pageTitle: "Pets-R-Us: Register",
    });
  });
  
  app.get('/customerList', (req, res) => {
    res.render('customerList', {
      title: "Pets-R-Us: Customer List",
      pageTitle: "Pets-R-Us: Customer List",
    });
  });
  
  app.get('/appointment', (req, res) => {
    res.render('appointment', {
      title: "Pets-R-Us: My Appointments",
      pageTitle: "Pets-R-Us: My Appointments",
    });
  });

// post route
app.post('/customers', (req, res, next) => {
  console.log(req.body);
  console.log(req.body.customerId);
  console.log(req.body.email);
  const newCustomer = new Customer({
    customerId: req.body.customerId,
    email: req.body.email
  })

  console.log(newCustomer);

  Customer.create(newCustomer, function(err, customer) {
      if (err) {
          console.log(err);
          next(err);
      } else {
          res.render('index', {
              title: 'Pets-R-Us'
          })
      }
  })
})


//Listens on port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));