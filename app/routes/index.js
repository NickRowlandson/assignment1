var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Generated Site', 
                       message: 'the first page'});
});

module.exports = router;
