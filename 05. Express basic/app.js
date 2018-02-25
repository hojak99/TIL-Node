var express = require('express');
var app = express();

// 라우터 모듈인 main.js 를 불러와 app 에 전달
var router = require('./router/main')(app);

// 서버가 읽을 수 있도록 HTML 의 위치 정의
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));


var server = app.listen(8080, function(){
    console.log("Express server has started on port 8080");
});

