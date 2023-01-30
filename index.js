"use-strict";

// import
const express = require("express");
const path = require("path");

// express app variable
const app = express();

//set views
app.set("views", path.join(__dirname, "views"));

// Tells Express to use ejs as the view engine
app.set("view engine", "ejs");

// set static files, folder: public, has images and stylesheets
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/site", express.static(path.join(__dirname, "public/stylesheets")));

// holds server port value
const PORT = process.env.PORT || 3000;

// renders homepage
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
  
  app.get("/boarding", (req, res) => {
    res.render('boarding', {
      title: "Pets-R-Us: Boarding",
      pageTitle: "Pets-R-Us: Boarding",
    });
  });
  
  app.get("/training", (req, res) => {
    res.render('training', {
      title: "Pets-R-Us: Training",
      pageTitle: "Pets-R-Us: Training",
    });
  });
  
  app.get("/register", (req, res) => {
    res.render('register', {
      title: "Pets-R-Us: Register",
      pageTitle: "Pets-R-Us: Register",
    });
  });
  
  app.get('/customers', (req, res) => {
    res.render('customers', {
      title: "Pets-R-Us: Customer List",
      pageTitle: "Pets-R-Us: Customer List",
    });
  });
  
  app.get("/appointment", (req, res) => {
    res.render("appointment", {
      title: "Pets-R-Us: My Appointments",
      pageTitle: "Pets-R-Us: My Appointments",
    });
  });

//Listen on port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));