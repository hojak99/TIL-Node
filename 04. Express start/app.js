/**
 * 20180225. express 설치 및 기초
 *
 * 라우팅 : 애플리케이션 엔드 포인트(URI)의 정의, URI가 클라이언트
 * 요청에 응답하는 방식을 말함
 * 
 * 보통 라우터 코드와 서버 코드는 다른 파일에 작성한다고 한다.
 */

var express = require('express');

var app = express();

var server = app.listen(8000, function() {
    console.log("Express server has started on port 8000");
});

// 라우터 추가
app.get('/', function(req,res) {
    // 웹 브라우저에 'Hello World' 가 출력된다.
    res.send('Hello World');
});