var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("index", {
    email: req.session.email,
    fname: req.session.fname,
    loginState: req.session.loginState
  });
});

module.exports = router;
