'use strict';

const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Alert = require('../lib/model/alerts.js');

router.post('/api/alerts', jsonParser, (req, res, next) => {
  console.log('hit post');
  let newAlert = new Alert(req.body)
  console.log('NEW ALERT', newAlert);
  newAlert
  .save()
  .then(data => res.json(data))
  .catch(err => console.log('errr', err))
})

router.get('/api/alerts', (req, res, next) => {
  console.log('HERE IN GET');
  let findObj = req.query || {};
  Alerts.find(findObj)
    .then(journal => res.send(journal))
    .catch(err => next({error: err}));
});

module.exports = router;
