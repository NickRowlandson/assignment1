var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    
    //load a user view instead
    res.render('users');
});

module.exports = router;
