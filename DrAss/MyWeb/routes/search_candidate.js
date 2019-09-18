var express = require('express');
var router = express.Router();

/* post member_insert */
router.post('/', function(req, res, next) {
  //biz  
    const searchType=req.body.searchType;
    const car_num_input=req.body.car_num_input;

    const result={msg:''};
    if(searchType && car_num_input){//정상 처리
      const car_info={
        "출생":"1953년 1월 24일, 경상남도 거제",
        "소속":"더불어민주당",
        "가족":"배우자 김정숙",
        "학력":"경희대학교 법학 학사",
        "수상":"2017년 대서양협의회 세계시민상",
      };
      result.msg=car_info;
      console.log(JSON.stringify(result));
      res.json(JSON.stringify(result));
    }else{//에러 처리
      result.msg='기호 번호 또는 이름이 입력되지 않았습니다.';
      res.json(JSON.stringify(result));
    } 
});
module.exports = router;
