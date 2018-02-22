var http = require('http');

/**
 * 웹브라우저에 Hellow World 띄우기.
 * 20180222. 회사에서 할 거 없어서.
 */
http.createServer(function (request, response) {
    // charset=UTF-8 --> 이거 안 붙히면 한글 안 깨짐;
    response.writeHead(200, {'Content-Type' : 'text/html;charset=UTF-8'});
    response.write('Hello World 다~');
    response.end();
}).listen(8888);