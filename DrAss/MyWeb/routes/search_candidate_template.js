var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {  
  res.render('search_candidate_template.html');//응답  
});

module.exports = router;
