var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('redmine-helper/job');
});

router.get('/redmine-email-receive', function(req, res, next) {
  require('../jobs/redmine-email-receive')();
  res.send('redmine-email-receive');
});

module.exports = router;
