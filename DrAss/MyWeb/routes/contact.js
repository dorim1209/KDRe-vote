var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("contact", {
    email: req.session.email,
    fname: req.session.fname,
    loginState: req.session.loginState
  });
});
module.exports = router;
