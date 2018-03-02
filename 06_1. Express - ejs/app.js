var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');

// 라우터 모듈인 main.js 를 불러와 app 에 전달
var router = require('./router/main')(app, fs);

// 서버가 읽을 수 있도록 HTML 의 위치 정의
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(session({
    secret: '@#@$MYSIGN#@$#$',      // session의 암호화에 사용되는 key 값
    resave: false,      // request 왔을 때, 기존 session 이 존재하는 경우 다시 저장할 지 선택
    saveUninitialized: true     // false 로 하면 session 저장 안한다. true 하면 모든 초기화되지 않은 session은 저장된다.
}));

var server = app.listen(8080, function(){
    console.log("Express server has started on port 8080");
});

