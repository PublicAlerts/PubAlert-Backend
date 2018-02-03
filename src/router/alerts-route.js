'use strict';

const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Alerts = require('../lib/model/alerts.js');

router.post('/api/alerts', jsonParser, (req, res, next) => {
  console.log('HERE IN POST');
  let newAlerts = new Alerts(req.body);
  newAlerts.save()
    .then(data => res.send(data)) //sending data back
    .catch(err => next({statusCode: 500, message: 'Unable to record your alert', error: err}));

});

module.exports = router;
