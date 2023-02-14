/*
======================================
; Title: customer.js 
; Author: Chris Gorham
; Date: 04 Feb 2023
; Description: This code establishes the Customer model and exports it
; Sources Used: N/A
;=====================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// establishes the new Schema and the data fields
let customerSchema = new Schema({
    customerId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

// exports the model
module.exports = mongoose.model('Customer', customerSchema);