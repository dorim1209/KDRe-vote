var express = require('express');
var router = express.Router();
     
/* post login 처리 */
router.post('/', function(req, res, next) {
  if (req.session.email === req.body.email) {
    req.session.loginState = true;
    res.redirect("/");
  } else {
    res.json(JSON.stringify({ msg: "해당하는 이메일이 없습니다. 다시 로그인 해주세요." }));
  }
});

  

module.exports = router;
