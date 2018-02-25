var http = require('http');

/**
 * 웹브라우저에 Hellow World 띄우기.
 * 20180222. 회사에서 할 거 없어서.
 */


 /*
    localhost:8888 or 8887 로 접속하면 콘솔창에 로그가 2번 출력된다.
    신기해서 알아보니까 대부분의 브라우저는 /favicon.ico 를 가져오기 위해 호출하기 때문에 2번 뜬다는 것 같다.
    
    "기명함수 : /"
    "기명함수 : /favicon.ico"

    로 출력되는 걸 볼 수 있다.
 */

// 기명 함수
http.createServer(function (request, response) {
    // charset=UTF-8 --> 이거 안 붙히면 한글 안 깨짐;
    console.log("기명함수 : "+ request.url)
    response.writeHead(200, {'Content-Type' : 'text/html;charset=UTF-8'});
    response.write('Hello World 다~');
    response.end();
}).listen(8888);


// 리스너 등록
var server = http.createServer();

server.addListener('connection', function(socket) {
    console.log('익명함수');
});
server.listen(8887);