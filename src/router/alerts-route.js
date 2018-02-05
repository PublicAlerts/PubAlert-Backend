'use strict';

const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Alert = require('../lib/model/alerts.js');

router.post('/api/alerts', jsonParser, (req, res, next) => {
//  console.log('HERE IN POST');
  let newAlert = new Alert(req.body)
  console.log('NEW ALERT', newAlert);
  newAlert
    .save()
    .then(data => res.json(data))
    .catch(err => next({statusCode: 500, message: 'Unable to record your alert', error: err}));
});

router.get('/api/alerts', (req, res, next) => {
  console.log('HERE IN GET');
  let findObj = req.query || {};
  Alert.find(findObj)
    .then(alerts => res.send(alerts))
    .catch(err => next({error: err}));
});

//this GET will look for alerts/12345
router.get('/api/alerts/:id', (req, res, next) => {
  Alert.findOne({_id: req.params.id})
    .then(alerts => res.send(alerts))
    .catch(err => next({error: err}));
});

router.put('/api/alerts/:id', jsonParser, (req, res, next) => {
  delete req.body._id;
  Alert.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}) //new entry after updates
    .then(data => res.send(data))
    .catch(err => next({error: err}));
});

router.patch('/api/alerts/:id', jsonParser, (req, res, next) => {
  delete req.body._id;
  Alert.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true}) //new entry after updates
    .then(data => res.send(data))
    .catch(err => next({error: err}));
});

router.delete('/api/alerts/:id', (req, res, next) => {
  console.log('We are in DEL request for ID ' + req.params.id);
  Alert.remove({_id: req.params.id})
    .then(data => res.send('The alerts entry with ID '+ req.params.id +
    ' has been deleted.'))
    .catch(err => next({error: err}));
});



module.exports = router;
