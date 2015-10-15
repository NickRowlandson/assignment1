/*
Project Name: Assignment 1 (Personal Portfolio)
By: Nick Rowlandson
Student ID: 200167125

*/

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//++++++++++++     Routes        ++++++++++++++++++

// POST method route
app.post('/contact', function (req, res) {
  var contactFormData = req.body.contactData;
  
  //Do nodemailer stuff here...
  
  res.send('POST request to the homepage');
});
//++++++++++++++++++++++++++++++++++++++++++++++++++

app.listen(3000);