'use strict';

const mongoose = require('mongoose');

const alertsSchema = new mongoose.Schema({
  userid: {type: String /* , required: true  ,unique: true */},
  eventName: {type: String},//concert, traffic, street block, emergency, free food truck, etc.
  eventInfo: {type: String},//more details like: car crash or Parade until 3pm
  eventLocation: {type: String, default: 'Downtown Seattle'},//expand on location options later?
  entryDate: {type: Date, default: Date.now},
});


const Alerts = module.exports = mongoose.model('Alerts', alertsSchema);


// echo '{"userid":"Max", "eventName":"concert", "eventInfo":"very nice event", "eventLocation":"Tukwila"}' | http POST http://localhost:3000/api/alerts
