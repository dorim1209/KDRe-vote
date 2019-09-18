var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('dr1209'));
app.use(session({
  resave:false,//재할당 x
  saveUninitialized:false,//저장 내용없으면 할당 받지 않겠다?
  secret:'dr1209', //암호화키
  cookie:{
    httpOnly:true,// true이면 자바스크립트 탈취 방지
    secure:false,//true이면 https에서만 사용하도록 설정
    maxAge:(30*60*1000)//30분 뒤에 이 쿠키 삭제 🡺 쿠키 maxAge는 무조건 파일로 남으므로 보안에 취약🡺 설정하지 말아야 함
  }
  }));


app.use('/', require('./routes/index'));
app.use('/member_insert', require('./routes/member_insert'));
app.use('/login', require('./routes/login'));
app.use('/contact', require('./routes/contact'));
app.use("/logout", require('./routes/logout'));
app.use('/search_candidate_template', require('./routes/search_candidate_template'));
app.use('/search_candidate', require('./routes/search_candidate'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
