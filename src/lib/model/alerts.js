'use strict';

const mongoose = require('mongoose');

const alertsSchema = new mongoose.Schema({
  userid: {type: String },
  eventName: {type: String},
  eventLocation: {type: String, default: 'Downtown Seattle'},
  entryDate: {type: Date, default: Date.now},
});


const Alerts = module.exports = mongoose.model('Alerts', alertsSchema);
