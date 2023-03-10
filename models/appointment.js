/*
======================================
; Title: appointment.js 
; Author: Chris Gorham
; Date: 25 Feb 2023
; Description: This code establishes the Appointment model and exports it
; Sources Used: Not Applicable
;=====================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// establishes the new Schema and the data fields
let appointmentSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: false },
    lastName: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    service: {type: String, required: true, unique: false}
});

// exports the model
module.exports = mongoose.model('appointment', appointmentSchema);