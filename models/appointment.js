/*
======================================
; Title: appointment.js 
; Author: Chris Gorham
; Date: 25 Feb 2023
; Description: This code establishes the Appointment model and exports it
; Sources Used: N/A
;=====================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// establishes the new Schema and the data fields
let appointmentSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: true },
    lastName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    service: {type: String, required: true, unique: true}
});

// exports the model
module.exports = mongoose.model('appointment', appointmentSchema);