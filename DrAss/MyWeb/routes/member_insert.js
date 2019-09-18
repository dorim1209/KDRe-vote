var express = require('express');
var router = express.Router();

/* post member_insert listing. */
router.post('/', function (req, res, next) {

    req.session.regenerate((err)=>{
        req.session.email = req.body.email;
        req.session.fname = req.body.fname;
        req.session.loginState = false;
        console.log(req.session.email);
        const fname = req.body.fname;
        const result = { msg: `${fname}님 환영합니다.` };
        res.json(JSON.stringify(result));
      
    });  
    
    
});

module.exports = router;